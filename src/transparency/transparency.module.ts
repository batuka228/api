import { Module } from '@nestjs/common';
import { TransparencyService } from './transparency.service';
import { TransparencyController } from './transparency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transparency } from 'src/models/transparency.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transparency', schema: Transparency }]),
  ],
  providers: [TransparencyService],
  controllers: [TransparencyController],
})
export class TransparencyModule {}
