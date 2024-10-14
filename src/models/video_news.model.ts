import { Schema } from 'mongoose';

export const Video_NewsSchema = new Schema({
  title: String,
  video_url: String,
  description: String,
  created_date: {
    type: Date,
    default: new Date(),
  },
  updated_date: Date,
});
