import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from 'src/models/employee.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
