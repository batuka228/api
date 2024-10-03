import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
interface employee {
  firstname: String;
  lastname: String;
  position: String;
  number: String;
  email: String;
  img: String;
}
@Controller('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Post()
  async create(@Body() createMerchantDto: employee): Promise<employee> {
    return this.employeeService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<employee>,
  ): Promise<employee> {
    return this.employeeService.updateEmployee(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.employeeService.deleteEmployee(id);
  }
  @Get()
  async findAll(): Promise<employee[]> {
    return this.employeeService.findAll();
  }
}
