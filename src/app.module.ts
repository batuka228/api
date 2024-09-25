import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantModule } from './merchants/merchant.module';
import { PlanController } from './plan/plan.controller';
import { PlanService } from './plan/plan.service';
import { PlanModule } from './plan/plan.module';
import { InvoiceService } from './invoice/invoice.service';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    MerchantModule,
    UsersModule,
    InvoiceModule,
    PlanModule,
    MongooseModule.forRoot(
      'mongodb+srv://baterdenebldrj:ZiDr5YPXgZJkMeBb@cluster0.cglss.mongodb.net/',
    ),
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
