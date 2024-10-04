import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BrachOrganizationService } from './branch-organization.service';
interface branch {
  name: String;
  link: String;
}
@Controller('brach-organization')
export class BrachOrganizationController {
  constructor(private readonly BrachService: BrachOrganizationService) {}
  @Post()
  async create(@Body() createMerchantDto: branch): Promise<branch> {
    return this.BrachService.create(createMerchantDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: Partial<branch>,
  ): Promise<branch> {
    return this.BrachService.updatebranch(id, updateMerchantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.BrachService.deletebranch(id);
  }
  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<branch> {
    return this.BrachService.findById(id);
  }
  @Get()
  async findAll(): Promise<branch[]> {
    return this.BrachService.findAll();
  }
}
