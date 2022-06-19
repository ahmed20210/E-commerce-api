const joi = require("joi");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Cart = require("./cart");
const Order = require("./order");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type:String, default: "" },
  phone: {type: Number,default:null },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  orders: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  whiteList:[ { type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const User = mongoose.model("User", UserSchema);

const userValidationSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .pattern(
      new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)
    )
    .required(),
  address: joi.string(),
  phone: joi.number(),
});

module.exports = User;
module.exports.userValidationSchema = userValidationSchema;
