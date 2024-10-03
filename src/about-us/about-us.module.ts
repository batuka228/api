import { Module } from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { AboutUsController } from './about-us.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutUsSchema } from 'src/models/aboutUs.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AboutUs', schema: AboutUsSchema }]),
  ],
  providers: [AboutUsService],
  controllers: [AboutUsController],
})
export class AboutUsModule {}
