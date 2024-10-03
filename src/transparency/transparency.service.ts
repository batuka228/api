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
    @InjectModel('Transparency') private merchantModel: Model<Transparency>,
  ) {} // Inject 'User' model

  async create(merchant: Transparency): Promise<Transparency> {
    console.log(merchant);

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
    TransparencyId: string,
    TransparencyData: Partial<Transparency>,
  ): Promise<Transparency> {
    const updatedTransparency = await this.merchantModel.findByIdAndUpdate(
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
    return this.merchantModel.find().exec();
  }
}
