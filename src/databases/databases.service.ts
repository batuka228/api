import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface databases {
  name: String;
  url: String;
}
@Injectable()
export class DatabasesService {
  constructor(
    @InjectModel('databases') private DataBasesModel: Model<databases>,
  ) {} // Inject 'User' model

  async create(current_news: databases): Promise<databases> {
    const newUser = new this.DataBasesModel(current_news);
    return newUser.save();
  }
  async deleteDatabases(current_newsId: string): Promise<void> {
    const result = await this.DataBasesModel.deleteOne({ _id: current_newsId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        `current_news with ID ${current_newsId} not found`,
      );
    }
  }
  async updateDatabases(
    databasesId: string,
    databasesData: Partial<databases>,
  ): Promise<databases> {
    const updatedcurrent_news = await this.DataBasesModel.findByIdAndUpdate(
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
  async findAll(): Promise<databases[]> {
    return this.DataBasesModel.find().exec();
  }
}
