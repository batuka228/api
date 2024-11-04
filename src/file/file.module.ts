import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Files } from 'src/models/file.model';
import { FileController } from './file.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'file', schema: Files }]),
  ],
  providers: [FileService]
  ,controllers: [FileController],
})
export class FileModule {}
