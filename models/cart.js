const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      price: { type: Number },
    },
  ],
  total: { type: Number, default: 0 },
});
const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;