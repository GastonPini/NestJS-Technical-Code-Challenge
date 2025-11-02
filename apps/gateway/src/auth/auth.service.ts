import { Inject, Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegisterUserDto } from './dto/register-user.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private client: ClientProxy,
  ) {}

  async registerUser(dto: RegisterUserDto) {
    try {
      const response$ = this.client.send({ cmd: 'register-user' }, dto);
      return await lastValueFrom(response$);
    } catch (error) {
      // Log para debug (puedes dejar o quitar)
      console.error('AuthService.registerUser() error:', error);

      // NestJS suele encapsular el error en error.message o error.response.message
      const message =
        error?.message ||
        error?.response?.message ||
        'Unexpected error while creating user';

      // Si el mensaje contiene el texto "Email already registered"
      if (message.includes('Email already registered')) {
        throw new BadRequestException('Email already registered');
      }

      // Si no es un error conocido, devolvemos 500 genérico
      throw new InternalServerErrorException(message);
    }
  }

  async getAllUsers() {
    try {
      const response$ = this.client.send({ cmd: 'get-users' }, {});
      return await lastValueFrom(response$);
    } catch (error) {
      console.error('AuthService.getAllUsers() error:', error);
      throw new InternalServerErrorException('Error fetching users');
    }
  }
}
