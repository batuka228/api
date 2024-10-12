import { Module } from '@nestjs/common';
import { CurrentNewsService } from './current_news.service';
import { CurrentNewsController } from './current_news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Curent_NewsSchema } from 'src/models/curent_news.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'current-news', schema: Curent_NewsSchema },
    ]),
  ],
  providers: [CurrentNewsService],
  controllers: [CurrentNewsController],
})
export class CurrentNewsModule {}
