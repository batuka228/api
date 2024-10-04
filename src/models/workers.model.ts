import { Schema } from 'mongoose';

export const WorkersSchema = new Schema({
  firstname: String,
  lastname: String,
  position: String,
  number: String,
  email: String,
  img: String,
});
