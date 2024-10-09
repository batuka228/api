import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserSchema } from 'src/models/user.model';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: 'yourSecretKey', // Replace this with your environment variable in production
      signOptions: { expiresIn: '60m' }, // Token expires in 60 minutes
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController], // Export MongooseModule to be imported in other modules
})
export class UsersModule {}
