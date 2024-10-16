import { Schema } from 'mongoose';

export const Transparency = new Schema({
  img: String,
  title: String,
  subTitle: [{ title: String, link: String }],
});
