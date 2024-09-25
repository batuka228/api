import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { invoiceSchema } from 'src/models/invoice.model';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Invoice', schema: invoiceSchema }]),
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
