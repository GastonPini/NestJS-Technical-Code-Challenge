import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    try {
      return await this.authService.registerUser(dto);
    } catch (error) {
      if (error.message?.includes('Email already registered')) {
        throw new BadRequestException('Email already registered');
      }
      throw error;
    }
  }

  @Get('users')
  @ApiOperation({ summary: 'Get all users' })
  async getUsers() {
    return this.authService.getAllUsers();
  }
}