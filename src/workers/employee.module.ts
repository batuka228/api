import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersSchema } from 'src/models/workers.model';
import { WokersService } from './employee.service';
import { WorkersController } from './employee.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Workers', schema: WorkersSchema }]),
  ],
  providers: [WokersService],
  controllers: [WorkersController],
})
export class WorkersModule {}
