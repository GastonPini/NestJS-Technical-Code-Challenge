import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'register-user' })
  async registerUser(data: RegisterUserDto) {
    return this.userService.create(data);
  }

  @MessagePattern({ cmd: 'get-users' })
  async getUsers() {
    return this.userService.findAll();
  }
}