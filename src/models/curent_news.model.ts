import { Schema } from 'mongoose';

export const Curent_NewsSchema = new Schema({
  imgs: [String],
  title: String,
  description: String,
});
