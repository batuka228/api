import { Schema } from 'mongoose';

export const Transparency = new Schema({
  title: String,
  data: { type: Buffer, required: true },
  contentType: { type: String, required: true },
  filename: { type: String, required: true }
});
