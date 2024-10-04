import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface legality {
  name: String;
  title: String;
  link: String;
  legalityType: String;
}
@Injectable()
export class LegalityService {
  constructor(
    @InjectModel('Legality') private legalityModel: Model<legality>,
  ) {} // Inject 'User' model

  async create(legality: legality): Promise<legality> {
    const newUser = new this.legalityModel(legality);
    return newUser.save();
  }
  async deleteLegality(legalityId: string): Promise<void> {
    const result = await this.legalityModel.deleteOne({ _id: legalityId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Legality with ID ${legalityId} not found`);
    }
  }
  async findById(id: string): Promise<legality> {
    const invoice = await this.legalityModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async updateLegality(
    legalityId: string,
    legalityData: Partial<legality>,
  ): Promise<legality> {
    const updatedLegality = await this.legalityModel.findByIdAndUpdate(
      legalityId,
      legalityData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedLegality) {
      throw new NotFoundException(`Legality with ID ${legalityId} not found`);
    }
    return updatedLegality;
  }
  async findAll(): Promise<legality[]> {
    return this.legalityModel.find().exec();
  }
}
