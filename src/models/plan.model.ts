import { Schema } from 'mongoose';

export const PlanSchema = new Schema({
  name: String,
  price: String,
  total: String,
  startDate: Date,
  endDate: Date,
});
