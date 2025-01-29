import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface Transparency {
  img: String;
  title: String;
  url: String;
}
@Injectable()
export class TransparencyService {
  constructor(
    @InjectModel('Transparency') private TransparencyModel: Model<Transparency>,
  ) {} // Inject 'User' model

  async create(merchant: Transparency): Promise<Transparency> {

    const newUser = new this.TransparencyModel(merchant);
    return newUser.save();
  }
  async findById(id: string): Promise<Transparency> {
    const invoice = await this.TransparencyModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async uploadFile(body:any): Promise<Transparency> {
    const newTransparency = new this.TransparencyModel(body);
    return newTransparency.save();
  }
  async deleteMerchant(merchantId: string): Promise<void> {
    const result = await this.TransparencyModel.deleteOne({ _id: merchantId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
  }
  async updateMerchant(
    TransparencyId: string,
    TransparencyData: Partial<Transparency>,
  ): Promise<Transparency> {
    const updatedTransparency = await this.TransparencyModel.findByIdAndUpdate(
      TransparencyId,
      TransparencyData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedTransparency) {
      throw new NotFoundException(
        `Merchant with ID ${TransparencyId} not found`,
      );
    }
    return updatedTransparency;
  }
  async findAll(): Promise<Transparency[]> {
    return this.TransparencyModel.find().exec();
  }
}
