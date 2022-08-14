const mongoose = require("mongoose");

const paymentMethod = ["Cash On Delivery", "Visa", "paypal"];
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orders: [
    {
      products: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, default: 1 },
          price: { type: Number },
        },
      ],
      to: { type: String },
      phone: { type: Number },
      total: { type: Number, default: 0 },
      date: { type: Date, default: Date.now },
      payment: { type: String, enum: paymentMethod },
      notes: { type: String },
    },
  ],
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
