import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FileService } from './file.service';
interface file {
    title: String;
    file : String 
}
@Controller('file')
export class FileController {
    constructor(private readonly FileService:FileService ) {}
    @Post()
    async create(@Body() createMerchantDto: file): Promise<file> {
      return this.FileService.create(createMerchantDto);
    }
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateDatabaseDto: Partial<file>,
    ): Promise<file> {
      return this.FileService.updateDatabases(id, updateDatabaseDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      return this.FileService.deleteDatabases(id);
    }
    @Get()
    async findAll(): Promise<file[]> {
      return this.FileService.findAll();
    }
    @Get(':id')
    async getInvoice(@Param('id') id: string): Promise<file> {
      return this.FileService.findById(id);
    }
  }
  
