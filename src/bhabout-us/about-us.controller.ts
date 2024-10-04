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
import { BHAboutUsService } from './about-us.service';
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
@Controller('bhabout-us')
export class BHAboutUsController {
  constructor(private readonly BHAboutUsService: BHAboutUsService) {}
  @Post()
  async create(@Body() createMerchantDto: AboutUs): Promise<AboutUs> {
    return this.BHAboutUsService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<AboutUs>,
  ): Promise<AboutUs> {
    return this.BHAboutUsService.updateAboutUs(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.BHAboutUsService.deleteAboutUs(id);
  }
  @Get()
  async findAll(): Promise<AboutUs[]> {
    return this.BHAboutUsService.findAll();
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<AboutUs> {
    return this.BHAboutUsService.findById(id);
  }
}
