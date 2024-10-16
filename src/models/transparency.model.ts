import { Schema } from 'mongoose';

export const Transparency = new Schema({
  img: String,
  title: String,
  subTitle: String,
  url: String,
});
