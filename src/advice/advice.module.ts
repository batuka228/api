import { Module } from '@nestjs/common';
import { AdviceService } from './advice.service';
import { AdviceController } from './advice.controller';

@Module({
  providers: [AdviceService],
  controllers: [AdviceController]
})
export class AdviceModule {}
