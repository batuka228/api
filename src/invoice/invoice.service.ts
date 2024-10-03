import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { invoice } from 'src/lib/interfaces';

@Injectable()
export class InvoiceService {
  constructor(@InjectModel('Invoice') private invoiceModel: Model<invoice>) {} // Inject 'User' model

  async create(invoice: invoice): Promise<invoice> {
    console.log(invoice);

    const newUser = new this.invoiceModel(invoice);
    return newUser.save();
  }
  async deleteInvoice(invoiceId: string): Promise<void> {
    const result = await this.invoiceModel.deleteOne({ _id: invoiceId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Invopice with ID ${invoiceId} not found`);
    }
  }
  async updateInvoice(
    invoiceId: string,
    invoiceData: Partial<invoice>,
  ): Promise<invoice> {
    const updatedInvoice = await this.invoiceModel.findByIdAndUpdate(
      invoiceId,
      invoiceData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedInvoice) {
      throw new NotFoundException(`Invoice with ID ${invoiceId} not found`);
    }
    return updatedInvoice;
  }
  async findAll(): Promise<invoice[]> {
    return this.invoiceModel.find().exec();
  }
  async findById(id: string): Promise<invoice> {
    const invoice = await this.invoiceModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
}
