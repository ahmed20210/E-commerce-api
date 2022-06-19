const router = require("express").Router();
const Review = require("../models/reviews");
const User = require("../models/user");
const Product = require("../models/product");
const checkDone = (res, result) => {
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send("Error");
  }
};
const modifyReview = async (userId, productId, action, review, rating) => {
  const product = await Product.findById(productId);
  const user = await User.findById(userId);
  const previousReview = await Review.findOne({
    user: userId,
    product: productId,
  });
  const coll = await Review.find({ product: productId });
  const sum = coll.reduce((acc, curr) => acc + curr.rating, 0);
  if (user && product) {
    if (action == "add") {
      const rate = {
        user: userId,
        product: productId,
        review: review,
        rating: rating,
      };
      const newReview = new Review(rate);
      if (!previousReview) {
        await newReview.save();
        product.rate.reviews.push(newReview._id);
        product.rate.numberOfReviews += 1;
        product.rate.rating =
          (product.rate.rating + rating) / product.rate.numberOfReviews;
        await product.save();
        return {
          review: newReview.review,
          rating: newReview.rating,
        }
      }
    } else if (action == "delete") {
      if (previousReview) {
        await Review.deleteOne({ user: userId, product: productId });

        product.rate.numberOfReviews = product.rate.numberOfReviews - 1;
        if (sum - previousReview.rating > 0) {
          product.rate.rating =
            (sum - previousReview.rating) / product.rate.numberOfReviews;
        } else if (sum - previousReview.rating === 0) {
          product.rate.rating = 0;
        }

        await product.save();
        return "review deleted";
      }
    } else if (action == "update") {
      if (previousReview) {
        await Review.updateOne(
          { user: userId, product: productId },
          { review: review, rating: rating }
        );
        const review = await Review.findOne({
          user: userId,
          product: productId,
        });
        product.rate.rating =
          (sum - previousReview.rating + rating) / product.rate.numberOfReviews;
        await product.save();
        return review;
      }
    }
  }
};
const addReview = async (userId, productId, review, rating) => {
  return modifyReview(userId, productId, "add", review, rating);
};
const deleteReview = async (userId, productId) => {
  return modifyReview(userId, productId, "delete");
};
const updateReview = async (userId, productId, review, rating) => {
  return modifyReview(userId, productId, "update", review, rating);
};

router.post("/:id/reviews/add", async (req, res) => {
  const userId = res.locals.user;
  const productId = req.params.id;
  const { review, rating } = req.body;
  const result = await addReview(userId, productId, review, rating);
  checkDone(res, result);
});
router.delete("/:id/reviews/delete", async (req, res) => {
  const userId = res.locals.user;
  const productId = req.params.id;
  const result = await deleteReview(userId, productId);
  checkDone(res, result);
});
router.put("/:id/reviews/update", async (req, res) => {
  const userId = res.locals.user;
  const productId = req.params.id;
  const { review, rating } = req.body;
  const result = await updateReview(userId, productId, review, rating);
  checkDone(res, result);
});
router.get("/:id/review", async (req, res) => {
  const productId = req.params.id;
  const result = await Review.find({
    user: res.locals.user,
    product: productId,
  }).select("-user -__v");

  checkDone(res, result);
});

module.exports = router;
