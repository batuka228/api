import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserSuggetionService } from './user-suggetion.service';
interface UserSuggetion {
    name: String,
    email: String,
    phoneNumber: String,
    description: String,
}
@Controller('user-suggetion')
export class UserSuggetionController {
    constructor(private readonly userSuggetionService: UserSuggetionService) {}
    @Post()
    async create(@Body() createUserDto: UserSuggetion): Promise<UserSuggetion> {
      return this.userSuggetionService.create(createUserDto); // Call the service to create a new user
    }
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateUserDto: Partial<UserSuggetion>,
    ): Promise<UserSuggetion> {
      return this.userSuggetionService.updateUserSuggetion(id, updateUserDto); // Call the service method to update the user
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      return this.userSuggetionService.deleteUserSuggetion(id); // Call the service method to delete the user
    }
    @Get()
    async findAll(): Promise<UserSuggetion[]> {
      return this.userSuggetionService.findAll();
    }
    
    @Get(':id')
    async getInvoice(@Param('id') id: string): Promise<UserSuggetion> {
      return this.userSuggetionService.findById(id);
    }
  }
  
