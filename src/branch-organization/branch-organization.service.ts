import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
interface branch {
  name: String;
  link: String;
}
@Injectable()
export class BrachOrganizationService {
  constructor(
    @InjectModel('brach-organization') private branchModel: Model<branch>,
  ) {} // Inject 'User' model

  async create(employee: branch): Promise<branch> {
    console.log(employee);

    const newbranch = new this.branchModel(employee);
    return newbranch.save();
  }
  async findById(id: string): Promise<branch> {
    const invoice = await this.branchModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
  async deletebranch(merchantId: string): Promise<void> {
    const result = await this.branchModel.deleteOne({ _id: merchantId });
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Merchant with ID ${merchantId} not found`);
    }
  }
  async updatebranch(
    branchId: string,
    branchData: Partial<branch>,
  ): Promise<branch> {
    const updatedbranch = await this.branchModel.findByIdAndUpdate(
      branchId,
      branchData,
      {
        new: true, // Return the updated document
        useFindAndModify: false,
      },
    );
    if (!updatedbranch) {
      throw new NotFoundException(`branch with ID ${branchId} not found`);
    }
    return updatedbranch;
  }
  async findAll(): Promise<branch[]> {
    return this.branchModel.find().exec();
  }
}
