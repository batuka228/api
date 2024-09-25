export interface User {
  name: String;
  email: String;
  password: String;
}
export interface invoice {
  invoiceNumber: String;
  customer: {
    name: String;
    email: String;
    address: String;
  };
  items: [
    {
      description: String;
      quantity: Number;
      unitPrice: Number;
    },
  ];
  totalAmount: Number;
  dueDate: Date;
  status: { type: String; enum: ['Paid', 'Unpaid', 'Overdue'] };
}
export interface Merchant {
  name: String;
  email: String;
  ownerId: String;
  phoneNumber: String;
  logoImg: String;
  domain: String;
  type: String;
  rdNumber: String;
}
export interface Plan {
  name: String;
  price: String;
  total: String;
  startDate: Date;
  endDate: Date;
}
