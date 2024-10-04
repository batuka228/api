import { Module } from '@nestjs/common';
import { AdviceService } from './advice.service';
import { AdviceController } from './advice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { advice } from 'src/models/advice.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'advise', schema: advice }])],
  providers: [AdviceService],
  controllers: [AdviceController],
})
export class AdviceModule {}
