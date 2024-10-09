import { Schema } from 'mongoose';

export const advice = new Schema({
  title: String,
  createdDate: String,
  img: [String],
  description: String,
});
