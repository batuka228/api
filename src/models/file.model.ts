import { Schema } from 'mongoose';

export const Files = new Schema({
  title: String,
  file: String,
});