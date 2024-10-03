import { Schema } from 'mongoose';

export const Databases = new Schema({
  name: String,
  url: String,
});
