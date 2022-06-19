const express = require("express");
const Product = require("../models/product");
const Review = require("../models/reviews");
const reviews = require("./reviews");
const router = express.Router();
const { OAuth } = require("../auth/oauth");
router.use(OAuth, reviews);

const getProduct = async (id) => {
  const product = await Product.findById(id).populate(
    "rate.reviews",
    "-user -product"
  );
  return product;
};
const getProducts = async () => {
  const products = await Product.find().populate(
    "rate.reviews",
    "-user -product"
  );
  return products;
};
const getProductsByCategory = async (category) => {
  const products = await Product.find({ category: category }).populate(
    "rate.reviews",
    "-user -product"
  );
  console.log(products);
  return products;
};
const getProductsBySubcategory = async (subcategory) => {
  const products = await Product.find({ subcategory: subcategory }).populate(
    "rate.reviews",
    "-user -product"
  );
  return products;
};

const sortProducts = async (sort) => {
  const products = await Product.find()
    .populate("rate.reviews", "-user -product")
    .sort(sort);
  return products;
};
const getProductsBySearch = async (search) => {
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  }).populate(
    "rate.reviews",
    "-user -product"
  );
  return products;
};
router.get("/", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});
router.get("/:id", async (req, res) => {
  const product = await getProduct(req.params.id);
  res.json(product);
});
router.get("/category/:category", async (req, res) => {
  const products = await getProductsByCategory(req.params.category);
  res.json(products);
});
router.get("/subcategory/:subcategory", async (req, res) => {
  const products = await getProductsBySubcategory(req.params.subcategory);
  res.json(products);
});
router.get("/sort/:sort", async (req, res) => {
  const products = await sortProducts(req.params.sort);
  res.json(products);
});
router.get("/search/:search", async (req, res) => {
  const products = await getProductsBySearch(req.params.search);
  res.json(products);
});

module.exports = router;
