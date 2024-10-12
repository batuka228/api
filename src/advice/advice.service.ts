import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface advise {
  title: String;
  createdDate: String;
  img: String;
  description: String;
}
@Injectable()
export class AdviceService {
  constructor(@InjectModel('advice') private adviseModel: Model<advise>) {} // Inject 'User' model

  async create(advise: advise): Promise<advise> {
    console.log(advise);

    const newadvise = new this.adviseModel(advise);
    return newadvise.save();
  }
  async findById(id: string): Promise<advise> {
    const invoice = await this.adviseModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async deleteadvise(merchantId: string): Promise<void> {
    const result = await this.adviseModel.deleteOne({ _id: merchantId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
  }
  async updateadvise(
    adviseId: string,
    adviseData: Partial<advise>,
  ): Promise<advise> {
    const updatedadvise = await this.adviseModel.findByIdAndUpdate(
      adviseId,
      adviseData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedadvise) {
      throw new NotFoundException(`Merchant with ID ${adviseId} not found`);
    }
    return updatedadvise;
  }
  async findAll(): Promise<advise[]> {
    return this.adviseModel.find().exec();
  }
}
