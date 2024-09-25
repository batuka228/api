import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from 'src/lib/interfaces';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}
  @Post()
  async create(@Body() createPlanDto: Plan): Promise<Plan> {
    return this.planService.create(createPlanDto); // Call the service to create a new user
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<Plan>,
  ): Promise<Plan> {
    return this.planService.updatePlan(id, updateMerchantDto); // Call the service method to update the user
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.planService.deletePlan(id); // Call the service method to delete the user
  }
  @Get()
  async findAll(): Promise<Plan[]> {
    return this.planService.findAll();
  }
}
