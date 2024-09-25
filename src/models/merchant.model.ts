import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const MerchantSchema = new Schema({
  name: String,
  email: String,
  ownerId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  phoneNumber: String,
  logoImg: String,
  domain: String,
  type: { type: String, enum: ['organzation ', 'citiez'] },
  rdNumber: String,
});
