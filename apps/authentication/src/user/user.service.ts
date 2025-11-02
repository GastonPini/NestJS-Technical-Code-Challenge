import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly repo: UserRepository) {}

  async create(dto: RegisterUserDto) {
    try {
      this.logger.debug(`Creating user: ${JSON.stringify(dto)}`);

      const exists = await this.repo.findByEmail(dto.email);
      if (exists) {
        throw new BadRequestException('Email already registered');
      }

      const user = await this.repo.create({
        email: dto.email,
        name: dto.name,
        password: dto.password,
      });

      this.logger.debug(`User created: ${JSON.stringify(user)}`);

      const { password, ...rest } = user;
      return rest;
    } catch (err) {
      this.logger.error('Error creating user', err.stack);
      throw err;
    }
  }

  async findAll() {
    const users = await this.repo.findAll();
    return users.map(u => {
      const { password, ...rest } = u;
      return rest;
    });
  }
}