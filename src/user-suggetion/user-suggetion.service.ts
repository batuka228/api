import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface UserSuggetion {
    name: String,
    email: String,
    phoneNumber: String,
    description: String,
}
@Injectable()
export class UserSuggetionService {
    constructor(@InjectModel('user-suggetion') private UserSuggetionModel: Model<UserSuggetion>) {} // Inject 'User' model
  
    async create(UserSuggetion: UserSuggetion): Promise<UserSuggetion> {
      console.log(UserSuggetion);
  
      const newUserSuggetion = new this.UserSuggetionModel(UserSuggetion);
      return newUserSuggetion.save();
    }
    async deleteUserSuggetion(UserSuggetionId: string): Promise<void> {
      const result = await this.UserSuggetionModel.deleteOne({ _id: UserSuggetionId });
      if (result.deletedCount === 0) {
        throw new NotFoundException(`User with ID ${UserSuggetionId} not found`);
      }
    }
    async findById(id: string): Promise<UserSuggetion> {
      const invoice = await this.UserSuggetionModel.findById(id).exec();
      if (!invoice) {
        throw new NotFoundException('Invoice not found');
      }
      return invoice;
    }
  
    
    async updateUserSuggetion(UserSuggetionId: string, UserSuggetionData: Partial<UserSuggetion>): Promise<UserSuggetion> {
      const updatedUser = await this.UserSuggetionModel.findByIdAndUpdate(
        UserSuggetionId,
        UserSuggetionData,
        {
          new: true, // Return the updated document
        },
      );
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${UserSuggetionId} not found`);
      }
      return updatedUser;
    }
    async findAll(): Promise<UserSuggetion[]> {
      return this.UserSuggetionModel.find().exec();
    }
  
   
  }
  
