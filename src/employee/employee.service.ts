import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface employee {
  firstname: String;
  lastname: String;
  position: String;
  number: String;
  email: String;
  img: String;
}
@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<employee>,
  ) {} // Inject 'User' model

  async create(employee: employee): Promise<employee> {
    console.log(employee);

    const newEmployee = new this.employeeModel(employee);
    return newEmployee.save();
  }
  async findById(id: string): Promise<employee> {
    const invoice = await this.employeeModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async deleteEmployee(merchantId: string): Promise<void> {
    const result = await this.employeeModel.deleteOne({ _id: merchantId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
  }
  async updateEmployee(
    EmployeeId: string,
    EmployeeData: Partial<employee>,
  ): Promise<employee> {
    const updatedEmployee = await this.employeeModel.findByIdAndUpdate(
      EmployeeId,
      EmployeeData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedEmployee) {
      throw new NotFoundException(`Merchant with ID ${EmployeeId} not found`);
    }
    return updatedEmployee;
  }
  async findAll(): Promise<employee[]> {
    return this.employeeModel.find().exec();
  }
}
