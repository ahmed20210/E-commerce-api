const mongoose = require("mongoose");

const category = [
  "Fashion",
  "Smartphone",
  "Laptop",
  "Camera",
  "Watches",
  "Electronics",
  "TV",
  "Accessories",
  "Food",
  "Health&GYM",
  "Shoes",
  "Jewellery",
  "Motors",
  "Bags",
  "Home"
];
const subcategory = [
  "Best Seller",
  "New Arrival",
  "Top Rated",
  "Featured",
  "On Sale",
  "Trending",
  "Hot Deals",
];
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rate: {
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review", default: []} ],
    rating: { type: Number, default: 0 },
    numberOfReviews: { type: Number, default: 0 },
  },
  category: { type: String, required: true, enum: category },
  subcategory: { type: [String], enum: subcategory, default: "New Arrival" },
  Sale: {
    pricebefore: { type: Number, default: 0 },
    value: { type: Number, default: 0 },
    available: { type: Boolean, default: false },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
  },
});
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
module.exports.category = category;
module.exports.subcategory = subcategory;
