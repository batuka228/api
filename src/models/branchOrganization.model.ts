import { Schema } from 'mongoose';

export const branchOrganization = new Schema({
  name: String,
  link: String,
});
