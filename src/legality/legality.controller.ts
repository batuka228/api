import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LegalityService } from './legality.service';
interface legality {
  name: String;
  title: String;
  link: String;
  legalityType: String;
}
@Controller('Legality')
export class LegalityController {
  constructor(private readonly legalityService: LegalityService) {}
  @Post()
  async create(@Body() createLegalityDto: legality): Promise<legality> {
    return this.legalityService.create(createLegalityDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLegalityDto: Partial<legality>,
  ): Promise<legality> {
    return this.legalityService.updateLegality(id, updateLegalityDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.legalityService.deleteLegality(id);
  }
  @Get()
  async findAll(): Promise<legality[]> {
    return this.legalityService.findAll();
  }
}
