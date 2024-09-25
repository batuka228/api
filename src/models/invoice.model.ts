import { Schema } from 'mongoose';

export const invoiceSchema = new Schema({
  invoiceNumber: String,
  customer: {
    name: String,
    email: String,
    address: String,
  },
  items: [
    {
      description: String,
      quantity: Number,
      unitPrice: Number,
    },
  ],
  merchant_id: String,
  totalAmount: Number,
  dueDate: Date,
  status: {
    type: String,
    enum: ['Төлөгдсөн', 'Төлөгдөөгүй', 'Хугацаа хэтэрсэн'],
  },
});
