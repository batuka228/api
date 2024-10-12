import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface current_news {
  imgs: [String];
  title: String;
  description: String;
}
@Injectable()
export class CurrentNewsService {
  constructor(
    @InjectModel('current-news') private AboutUsModel: Model<current_news>,
  ) {} // Inject 'User' model

  async create(current_news: current_news): Promise<current_news> {
    const newUser = new this.AboutUsModel(current_news);
    return newUser.save();
  }
  async deleteCurrentNews(current_newsId: string): Promise<void> {
    const result = await this.AboutUsModel.deleteOne({ _id: current_newsId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        `current_news with ID ${current_newsId} not found`,
      );
    }
  }
  async updateCurrentNews(
    current_newsId: string,
    current_newsData: Partial<current_news>,
  ): Promise<current_news> {
    const updatedcurrent_news = await this.AboutUsModel.findByIdAndUpdate(
      current_newsId,
      current_newsData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedcurrent_news) {
      throw new NotFoundException(
        `Merchant with ID ${current_newsId} not found`,
      );
    }
    return updatedcurrent_news;
  }
  async findById(id: string): Promise<current_news> {
    const invoice = await this.AboutUsModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async findAll(): Promise<current_news[]> {
    return this.AboutUsModel.find().exec();
  }
}
