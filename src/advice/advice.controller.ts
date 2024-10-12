import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdviceService } from './advice.service';
interface advice {
  title: String;
  createdDate: String;
  img: String;
  description: String;
}
@Controller('advice')
export class AdviceController {
  constructor(private readonly adviseService: AdviceService) {}
  @Post()
  async create(@Body() createMerchantDto: advice): Promise<advice> {
    return this.adviseService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<advice>,
  ): Promise<advice> {
    return this.adviseService.updateadvise(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.adviseService.deleteadvise(id);
  }
  @Get()
  async findAll(): Promise<advice[]> {
    return this.adviseService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<advice> {
    return this.adviseService.findById(id);
  }
}
