import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CurrentNewsService } from './current_news.service';
interface Current_News {
  imgs: [String];
  title: String;
  description: String;
}
@Controller('current-news')
export class CurrentNewsController {
  constructor(private readonly current_newsService: CurrentNewsService) {}
  @Post()
  async create(@Body() createMerchantDto: Current_News): Promise<Current_News> {
    return this.current_newsService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<Current_News>,
  ): Promise<Current_News> {
    return this.current_newsService.updateCurrentNews(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.current_newsService.deleteCurrentNews(id);
  }
  @Get()
  async findAll(): Promise<Current_News[]> {
    return this.current_newsService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<Current_News> {
    return this.current_newsService.findById(id);
  }
}
