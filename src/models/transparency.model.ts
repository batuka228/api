import { Schema } from 'mongoose';

export const Transparency = new Schema({
  title: String,
  filename: { type: String, required: true }
});
