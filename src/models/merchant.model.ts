import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export enum MerchantType {
  INDIVIDUAL = 'INDIVIDUAL',
  ORGANIZATION = 'ORGANIZATION', // Ensure this is included
}
export const MerchantSchema = new Schema({
  name: 'String',
  email: 'String',
  ownerId: {
    type: 'String',
    default: 'uuidv4',
    unique: true,
  },
  phoneNumber: 'String',
  logoImg: 'String',
  domain: 'String',
  Merchant_type: {
    type: 'String',
    enum: ['ORGANIZATION', 'CITIES'],
  },
  rdNumber: 'String',
});
