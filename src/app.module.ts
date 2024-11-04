import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantModule } from './merchants/merchant.module';
import { PlanModule } from './plan/plan.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AboutUsModule } from './bhabout-us/about-us.module';

import { VideoNewsModule } from './video_news/video_news.module';
import { DatabasesModule } from './databases/databases.module';
import { TransparencyModule } from './transparency/transparency.module';
import { AdviceModule } from './advice/advice.module';

import { BranchOrganizationModule } from './branch-organization/branch-organization.module';
import { WorkersModule } from './workers/employee.module';
import { LegalityModule } from './bhlegality/legality.module';
import { CurrentNewsModule } from './current-news/current_news.module';
import { UserSuggetionModule } from './user-suggetion/user-suggetion.module';
import { FileController } from './file/file.controller';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MerchantModule,
    UsersModule,
    InvoiceModule,
    PlanModule,
    MongooseModule.forRoot(
      'mongodb+srv://baterdenebldrj:ZiDr5YPXgZJkMeBb@cluster0.cglss.mongodb.net/baigal-orchin',
    ),
    InvoiceModule,
    AboutUsModule,
    CurrentNewsModule,
    VideoNewsModule,
    DatabasesModule,
    TransparencyModule,
    AdviceModule,
    BranchOrganizationModule,
    WorkersModule,
    LegalityModule,
    UserSuggetionModule,
    FileModule,
  ],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
