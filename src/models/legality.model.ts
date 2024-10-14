import { Schema } from 'mongoose';

export const legalitySchema = new Schema({
  title: { type: String, required: true },
  link: String,
  legalityType: {
    enum: ['Монгол улсын хууль', 'Тогтоол шийдвэр', 'Тушаал дүрэм журам'],
    type: String,
    required: true,
  },
});
