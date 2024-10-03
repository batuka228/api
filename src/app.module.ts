import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantModule } from './merchants/merchant.module';
import { PlanModule } from './plan/plan.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AboutUsModule } from './about-us/about-us.module';
import { CurrentNewsModule } from './current_news/current_news.module';
import { VideoNewsModule } from './video_news/video_news.module';
import { DatabasesModule } from './databases/databases.module';
import { TransparencyModule } from './transparency/transparency.module';

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
    AboutUsModule,
    CurrentNewsModule,
    VideoNewsModule,
    DatabasesModule,
    TransparencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
