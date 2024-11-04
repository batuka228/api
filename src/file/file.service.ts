import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface file {
    title: String;
    file : String 
}
@Injectable()
export class FileService {
    constructor(
      @InjectModel('file') private FileModel: Model<file>,
    ) {} // Inject 'User' model
  
    async create(current_news: file): Promise<file> {
      const newUser = new this.FileModel(current_news);
      return newUser.save();
    }
    async findById(id: string): Promise<file> {
      const invoice = await this.FileModel.findById(id).exec();
      if (!invoice) {
        throw new NotFoundException('Invoice not found');
      }
      return invoice;
    }
    async deleteDatabases(current_newsId: string): Promise<void> {
      const result = await this.FileModel.deleteOne({ _id: current_newsId });
      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `current_news with ID ${current_newsId} not found`,
        );
      }
    }
    async updateDatabases(
      databasesId: string,
      databasesData: Partial<file>,
    ): Promise<file> {
      const updatedcurrent_news = await this.FileModel.findByIdAndUpdate(
        databasesId,
        databasesData,
        {
          new: true, // Return the updated document
          useFindAndModify: false,
        },
      );
      if (!updatedcurrent_news) {
        throw new NotFoundException(
          `current_news with ID ${databasesId} not found`,
        );
      }
      return updatedcurrent_news;
    }
    async findAll(): Promise< file[]> {
      return this.FileModel.find().exec();
    }
  }
  
