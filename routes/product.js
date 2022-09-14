const express = require("express");
const Product = require("../models/product");
const Review = require("../models/reviews");
const reviews = require("./reviews");
const router = express.Router();
const { OAuth } = require("../auth/oauth");
router.use("/reviews", OAuth, reviews);
// get products by id
const getProduct = async (id) => {
  const product = await Product.findById(id).populate(
    "rate.reviews",
    "-user -product"
  );
  return product;
};

// get products by category
const getProductsByCategory = async (category) => {
  const products = await Product.find({ category: category }).populate(
    "rate.reviews",
    "-user -product"
  );
  return products;
};
// get products by subcategory
const getProductsBySubcategory = async (subcategory) => {
  const products = await Product.find({ subcategory: subcategory }).populate(
    "rate.reviews",
    "-user -product"
  );
  return products;
};
// sort products function
const sortProducts = async (sort) => {
  const products = await Product.find()
    .populate("rate.reviews", "-user -product")
    .sort(sort);
  return products;
};
// get limited number of products
const getLimitedProducts = async (list, limit) => {
  const products = await Product.find()
    .populate("rate.reviews", "-user -product")
    .skip(list * limit)
    .limit(limit);
  return products;
};
// search products function
const getProductsBySearch = async (search) => {
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  }).populate("rate.reviews", "-user -product");
  return products;
};
// get products list route
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate(
      "rate.reviews",
      "-user -product"
    );
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});
// get limited number of products route
router.get("/limit/:list/:limit", async (req, res) => {
  try {
    const list = req.params.list;
    const limit = req.params.limit;
    if (
      parseInt(list).toString() == "NaN" ||
      parseInt(limit).toString() == "NaN"
    ) {
      res.status(400).send("Invalid list or limit");
    } else {
      const products = await getLimitedProducts(list, limit);
      res.send(products);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
// get products by id route
router.get("/:id", async (req, res) => {
  try {
    const product = await getProduct(req.params.id);
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});
// get products by category route
router.get("/category/:category", async (req, res) => {
  try {
    const products = await getProductsByCategory(req.params.category);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});
// get products by subcategory route
router.get("/subcategory/:subcategory", async (req, res) => {
  try {
    const products = await getProductsBySubcategory(req.params.subcategory);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});
// sort products route
router.get("/sort/:sort", async (req, res) => {
  try {
    const products = await sortProducts(req.params.sort);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});
// search products route
router.get("/search/:search", async (req, res) => {
  try {
    const products = await getProductsBySearch(req.params.search);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

// get limited number of products route
router.get("/subcategory/:subcategory/limit/:list/:limit", async (req, res) => {
  try {
    const list = req.params.list;
    const limit = req.params.limit;
    const subcategory = req.params.subcategory;
    if (
      parseInt(list).toString() == "NaN" ||
      parseInt(limit).toString() == "NaN"
    ) {
      res.status(400).send("Invalid list or limit");
    } else {
      const products = await Product.find({ subcategory: subcategory })
        .populate("rate.reviews", "-user -product")
        .skip(list * limit)
        .limit(limit);
      res.status(200).send(products);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
// get products by category route
router.get("/category/:category/limit/:list/:limit", async (req, res) => {
  try {
    const list = req.params.list;
    const limit = req.params.limit;
    const category = req.params.category;
    if (
      parseInt(list).toString() == "NaN" ||
      parseInt(limit).toString() == "NaN"
    ) {
      res.status(400).send("Invalid list or limit");
    } else {
      const products = await Product.find({ category: category })
        .populate("rate.reviews", "-user -product")
        .skip(list * limit)
        .limit(limit);
      res.status(200).send(products);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
