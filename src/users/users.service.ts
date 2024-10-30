import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import jwt from 'jsonwebtoken';
interface User {
  name: String;
  email: String;
  password: String;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {} // Inject 'User' model

  async create(user: User): Promise<User> {
    console.log(user);

    const newUser = new this.userModel(user);
    return newUser.save();
  }
  async deleteUser(userId: string): Promise<void> {
    const result = await this.userModel.deleteOne({ _id: userId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  }
  async findById(id: string): Promise<User> {
    const invoice = await this.userModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }

  async findadmin(findadmin: any): Promise<any> {
    const { email, password } = findadmin;
    const isAdmin = 'isAdmin';
    const admin = await this.userModel.findOne({
      email,
    });

    if (!admin) {
      throw new NotFoundException('admin not found');
    } else if (admin && admin?.password !== password) {
      throw new NotFoundException(`wrong password`);
    } else if (admin && admin?.password === password) {
      return { admin: admin, token: isAdmin };
    }
  }
  async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      userData,
      {
        new: true, // Return the updated document
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
