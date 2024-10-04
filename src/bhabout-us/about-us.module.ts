import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BHAboutUsSchema } from 'src/models/BHaboutUs.model';
import { BHAboutUsService } from './about-us.service';
import { BHAboutUsController } from './about-us.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'bhabout-us', schema: BHAboutUsSchema },
    ]),
  ],
  providers: [BHAboutUsService],
  controllers: [BHAboutUsController],
})
export class AboutUsModule {}
