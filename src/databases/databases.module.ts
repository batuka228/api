import { Module } from '@nestjs/common';
import { DatabasesService } from './databases.service';
import { DatabasesController } from './databases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Databases } from 'src/models/databases.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'databases', schema: Databases }]),
  ],
  providers: [DatabasesService],
  controllers: [DatabasesController],
})
export class DatabasesModule {}
