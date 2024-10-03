import { Schema } from 'mongoose';

export const Video_NewsSchema = new Schema({
  title: String,
  video_url: String,
  description: String,
});
