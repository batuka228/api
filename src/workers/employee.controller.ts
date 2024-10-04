import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WokersService } from './employee.service';
interface employee {
  firstname: String;
  lastname: String;
  position: String;
  number: String;
  email: String;
  img: String;
}
@Controller('Workers')
export class WorkersController {
  constructor(private readonly WorkersService: WokersService) {}
  @Post()
  async create(@Body() createMerchantDto: employee): Promise<employee> {
    return this.WorkersService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<employee>,
  ): Promise<employee> {
    return this.WorkersService.updateEmployee(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.WorkersService.deleteEmployee(id);
  }
  @Get()
  async findAll(): Promise<employee[]> {
    return this.WorkersService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<employee> {
    return this.WorkersService.findById(id);
  }
}
