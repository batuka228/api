import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant } from 'src/lib/interfaces';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel('Merchant') private merchantModel: Model<Merchant>,
  ) {} // Inject 'User' model

  async create(merchant: Merchant): Promise<Merchant> {
    const newUser = new this.merchantModel(merchant);
    return newUser.save();
  }
  async deleteMerchant(merchantId: string): Promise<void> {
    const result = await this.merchantModel.deleteOne({ _id: merchantId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
  }
  async updateMerchant(
    merchantId: string,
    merchantData: Partial<Merchant>,
  ): Promise<Merchant> {
    const updatedMerchant = await this.merchantModel.findByIdAndUpdate(
      merchantId,
      merchantData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedMerchant) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
    return updatedMerchant;
  }
  async findAll(): Promise<Merchant[]> {
    return this.merchantModel.find().exec();
  }
}
