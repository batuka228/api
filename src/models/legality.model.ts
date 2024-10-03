import { Schema } from 'mongoose';

export const legalitySchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  link: String,
  legalityType: {
    enum: ['LAW', 'RULES', 'RESOLUTION', 'COMMAND', 'CONSENT'],
    type: String,
    required: true,
  },
});
