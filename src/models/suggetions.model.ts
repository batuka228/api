import { Schema } from 'mongoose';

export const UserSuggetion = new Schema({
  
    name: String,
    email: String,
    phoneNumber: String,
    description: String,
});