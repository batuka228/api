import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AboutUsService } from './about-us.service';
interface AboutUs {
  name: String;
  titile: String;
  description: String;
  aboutUs: {
    title: String;
    description1: String;
    description2: String;
  };
  address: String;
  phone: String;
  email: String;
  facebook: String;
  historical_route: [String];
  aboutduties: String;
  porpose: String;
}
@Controller('about-us')
export class AboutUsController {
  constructor(private readonly AboutUsService: AboutUsService) {}
  @Post()
  async create(@Body() createMerchantDto: AboutUs): Promise<AboutUs> {
    return this.AboutUsService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<AboutUs>,
  ): Promise<AboutUs> {
    return this.AboutUsService.updateAboutUs(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.AboutUsService.deleteAboutUs(id);
  }
  @Get()
  async findAll(): Promise<AboutUs[]> {
    return this.AboutUsService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<AboutUs> {
    return this.AboutUsService.findById(id);
  }
}
