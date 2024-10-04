import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
interface User {
  name: String;
  email: String;
  password: String;
}
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() createUserDto: User): Promise<User> {
    return this.usersService.create(createUserDto); // Call the service to create a new user
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<User>,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto); // Call the service method to update the user
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id); // Call the service method to delete the user
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }
}
