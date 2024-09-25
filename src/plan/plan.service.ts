import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan } from 'src/lib/interfaces';

@Injectable()
export class PlanService {
  constructor(@InjectModel('plan') private planModel: Model<Plan>) {} // Inject 'User' model

  async create(plan: Plan): Promise<Plan> {
    const newPlan = new this.planModel(plan);
    return newPlan.save();
  }
  async deletePlan(planId: string): Promise<void> {
    const result = await this.planModel.deleteOne({ _id: planId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Plan with ID ${planId} not found`);
    }
  }
  async updatePlan(planId: string, planData: Partial<Plan>): Promise<Plan> {
    const updatedPlan = await this.planModel.findByIdAndUpdate(
      planId,
      planData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedPlan) {
      throw new NotFoundException(`Plan with ID ${planId} not found`);
    }
    return updatedPlan;
  }
  async findAll(): Promise<Plan[]> {
    return this.planModel.find().exec();
  }
}
