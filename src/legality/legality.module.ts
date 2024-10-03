import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { legalitySchema } from 'src/models/legality.model';
import { LegalityService } from './legality.service';
import { LegalityController } from './legality.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Legality', schema: legalitySchema }]),
  ],
  providers: [LegalityService],
  controllers: [LegalityController],
})
export class LegalityModule {}
