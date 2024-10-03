import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VideoNewsService } from './video_news.service';
interface VideoNews {
  title: String;
  video_url: String;
  description: String;
}
@Controller('Video_news')
export class VideoNewsController {
  constructor(private readonly VideNewsService: VideoNewsService) {}
  @Post()
  async create(@Body() createVideoNewsDto: VideoNews): Promise<VideoNews> {
    return this.VideNewsService.create(createVideoNewsDto); // Call the service to create a new user
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVideoNewsDto: Partial<VideoNews>,
  ): Promise<VideoNews> {
    return this.VideNewsService.updateVideoNews(id, updateVideoNewsDto); // Call the service method to update the user
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.VideNewsService.deleteVideoNews(id); // Call the service method to delete the user
  }
  @Get()
  async findAll(): Promise<VideoNews[]> {
    return this.VideNewsService.findAll();
  }
}
