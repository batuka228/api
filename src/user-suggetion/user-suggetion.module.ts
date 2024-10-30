import { Module } from '@nestjs/common';
import { UserSuggetionController } from './user-suggetion.controller';
import { UserSuggetionService } from './user-suggetion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSuggetion } from 'src/models/suggetions.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'user-suggetion', schema: UserSuggetion },
    ]),
  ],
  controllers: [UserSuggetionController],
  providers: [UserSuggetionService]
})
export class UserSuggetionModule {}
