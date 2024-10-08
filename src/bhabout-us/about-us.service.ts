import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface AboutUs {
  name: String;
  titile: String;
  description: String;
  aboutUs: {
    title: String;
    description1: String;
    description2: String;
  };
  address: String;
  phone: String;
  email: String;
  facebook: String;
  historical_route: [String];
  aboutduties: String;
  porpose: String;
}
@Injectable()
export class BHAboutUsService {
  constructor(
    @InjectModel('bhabout-us') private BHAboutUsModel: Model<AboutUs>,
  ) {} // Inject 'User' model

  async create(aboutus: AboutUs): Promise<AboutUs> {
    const newUser = new this.BHAboutUsModel(aboutus);
    return newUser.save();
  }
  async deleteAboutUs(merchantId: string): Promise<void> {
    const result = await this.BHAboutUsModel.deleteOne({ _id: merchantId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
  }
  async updateAboutUs(
    aboutUsId: string,
    aboutUsData: Partial<AboutUs>,
  ): Promise<AboutUs> {
    const updatedAboutUs = await this.BHAboutUsModel.findByIdAndUpdate(
      aboutUsId,
      aboutUsData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedAboutUs) {
      throw new NotFoundException(`Merchant with ID ${aboutUsId} not found`);
    }
    return updatedAboutUs;
  }
  async findById(id: string): Promise<AboutUs> {
    const invoice = await this.BHAboutUsModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async findAll(): Promise<AboutUs[]> {
    return this.BHAboutUsModel.find().exec();
  }
}
