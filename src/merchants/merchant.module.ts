import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantSchema } from 'src/models/merchant.model';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Merchant', schema: MerchantSchema }]),
  ],
  providers: [MerchantService],
  controllers: [MerchantController],
})
export class MerchantModule {}
