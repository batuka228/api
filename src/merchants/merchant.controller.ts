import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from 'src/lib/interfaces';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}
  @Post()
  async create(@Body() createMerchantDto: Merchant): Promise<Merchant> {
    return this.merchantService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<Merchant>,
  ): Promise<Merchant> {
    return this.merchantService.updateMerchant(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.merchantService.deleteMerchant(id);
  }
  @Get()
  async findAll(): Promise<Merchant[]> {
    return this.merchantService.findAll();
  }
}
