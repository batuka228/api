import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DatabasesService } from './databases.service';
interface databases {
  name: String;
  url: String;
}
@Controller('databases')
export class DatabasesController {
  constructor(private readonly current_newsService: DatabasesService) {}
  @Post()
  async create(@Body() createMerchantDto: databases): Promise<databases> {
    return this.current_newsService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDatabaseDto: Partial<databases>,
  ): Promise<databases> {
    return this.current_newsService.updateDatabases(id, updateDatabaseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.current_newsService.deleteDatabases(id);
  }
  @Get()
  async findAll(): Promise<databases[]> {
    return this.current_newsService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<databases> {
    return this.current_newsService.findById(id);
  }
}
