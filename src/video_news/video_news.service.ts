import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface VideoNews {
  title: String;
  video_url: String;
  description: String;
}
@Injectable()
export class VideoNewsService {
  constructor(
    @InjectModel('Video_news') private videoNewsModel: Model<VideoNews>,
  ) {} // Inject 'User' model

  async create(video_news: VideoNews): Promise<VideoNews> {
    const newVideoNews = new this.videoNewsModel(video_news);
    return newVideoNews.save();
  }
  async deleteVideoNews(videoNewsId: string): Promise<void> {
    const result = await this.videoNewsModel.deleteOne({ _id: videoNewsId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        `Video_News with ID ${videoNewsId} not found`,
      );
    }
  }
  async updateVideoNews(
    videoNewsId: string,
    VideoNewsData: Partial<VideoNews>,
  ): Promise<VideoNews> {
    const updatedVideoNews = await this.videoNewsModel.findByIdAndUpdate(
      videoNewsId,
      VideoNewsData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedVideoNews) {
      throw new NotFoundException(`User with ID ${videoNewsId} not found`);
    }
    return updatedVideoNews;
  }
  async findAll(): Promise<VideoNews[]> {
    return this.videoNewsModel.find().exec();
  }
}
