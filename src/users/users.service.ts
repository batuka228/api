import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

interface User {
  name: String;
  email: String;
  password: String;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {} // Inject 'User' model

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  async deleteUser(userId: string): Promise<void> {
    const result = await this.userModel.deleteOne({ _id: userId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  }
  async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      userData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return updatedUser;
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
