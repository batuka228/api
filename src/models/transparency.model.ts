import { Schema } from 'mongoose';

export const Transparency = new Schema({
  title: String,
  filename: { type: String, required: true },
  type: {
    type: String,
    enum: ["il tod", "sudalgaa", "hunii nuuts", 'uil ajillagaa', 'busad']
  }
});
