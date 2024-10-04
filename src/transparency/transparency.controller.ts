import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TransparencyService } from './transparency.service';
interface Transparency {
  img: String;
  title: String;
  url: String;
}
@Controller('transparency')
export class TransparencyController {
  constructor(private readonly TransparencyService: TransparencyService) {}
  @Post()
  async create(
    @Body() createTransparencyDto: Transparency,
  ): Promise<Transparency> {
    return this.TransparencyService.create(createTransparencyDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<Transparency>,
  ): Promise<Transparency> {
    return this.TransparencyService.updateMerchant(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.TransparencyService.deleteMerchant(id);
  }
  @Get()
  async findAll(): Promise<Transparency[]> {
    return this.TransparencyService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<Transparency> {
    return this.TransparencyService.findById(id);
  }
}
