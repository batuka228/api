import { Schema } from 'mongoose';

export const BHAboutUsSchema = new Schema({
  name: String,
  titile: String,
  description: String,
  aboutUs: {
    title: String,
    description1: String,
    description2: String,
  },
  address: String,
  phone: String,
  email: String,
  facebook: String,
  historical_route: [String],
  aboutduties: String,
  porpose: String,
  management: String,
  numberOfHouses: String,
  imgs: [String],
});
