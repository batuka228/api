import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { invoice } from 'src/lib/interfaces';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly InvoiceService: InvoiceService) {}
  @Post()
  async create(@Body() createInvoiceDto: invoice): Promise<invoice> {
    return this.InvoiceService.create(createInvoiceDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: Partial<invoice>,
  ): Promise<invoice> {
    return this.InvoiceService.updateInvoice(id, updateInvoiceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.InvoiceService.deleteInvoice(id);
  }
  @Get()
  async findAll(): Promise<invoice[]> {
    return this.InvoiceService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<invoice> {
    return this.InvoiceService.findById(id);
  }
}
