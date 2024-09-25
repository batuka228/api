import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from 'src/models/plan.model';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: `plan`, schema: PlanSchema }])],
  providers: [PlanService],
  controllers: [PlanController],
})
export class PlanModule {}
