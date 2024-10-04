import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrachOrganizationService } from './branch-organization.service';
import { BrachOrganizationController } from './branch-organization.controller';
import { branchOrganization } from 'src/models/branchOrganization.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'brach-organization', schema: branchOrganization },
    ]),
  ],
  providers: [BrachOrganizationService],
  controllers: [BrachOrganizationController],
})
export class BranchOrganizationModule {}
