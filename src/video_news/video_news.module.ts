import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Video_NewsSchema } from 'src/models/video_news.model';
import { VideoNewsService } from './video_news.service';
import { VideoNewsController } from './video_news.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Video_news', schema: Video_NewsSchema },
    ]),
  ],
  providers: [VideoNewsService],
  controllers: [VideoNewsController], // Export MongooseModule to be imported in other modules
})
export class VideoNewsModule {}
