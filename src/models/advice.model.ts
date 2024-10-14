import { Schema } from 'mongoose';

export const advice = new Schema({
  title: String,
  createdDate: String,
  img: [String],
  description: String,
  created_date: {
    type: Date,
    default: new Date(),
  },
  updated_date: Date,
});
