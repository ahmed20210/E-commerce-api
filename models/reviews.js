const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  review: { type: String },
  rating: { type: Number, required: true, max: 5, min: 1 },
});
const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
