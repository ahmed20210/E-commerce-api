const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const cart = require("./routes/cart");
const product = require("./routes/product");
const user = require("./routes/user");
const order = require("./routes/order");
const whitelist = require("./routes/whitelist");
const { OAuth, checkUser } = require("./auth/oauth");
const { category, subcategory } = require("./models/product");
const Product = require("./models/product");
const Review = require("./models/reviews");
const User = require("./models/user");
const { document, protectedAPIsThatRequireLogin } = require("./documents");
const { required } = require("joi");
const URI =
  "mongodb+srv://ahmedmostafa:01144781238ahmed@ecommerce.lxpr7.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));

app.use(cookieParser());

app.use(user);
app.use("*", checkUser);
app.use("/product", product);
app.use("/orders", OAuth, order);
app.use("/cart", OAuth, cart);
app.use("/whitelist", OAuth, whitelist);

app.get("/categories", async (req, res) => {
  const categorys = await category;
  res.json(categorys);
});
app.get("/subcategories", async (req, res) => {
  const subcategorys = subcategory;
  res.json(subcategorys);
});
app.get("/Oauth", (req, res, next) => {
    OAuth(req, res, next);
});

app.set("viewengine", "ejs");
app.get("/", async (req, res) => {
  res.render("index.ejs", { document, protectedAPIsThatRequireLogin });
});

// const modifyProduct = async ()=>{
//   const product = await Product.find()
//   product.map(async (item, index)=>{
//     const productId = item._id
//       const review = "lorem ipsum review goes here"
//       const rating = Math.ceil(Math.random() * 5);
// const rate = {
//   user: "62dbddfebf657a1157f265e5",
//   product: productId,
//   review: review,
//   rating: rating,
// };
//       const newReview = new Review(rate);

//         // item.rate.reviews.push(newReview._id);
//         // item.rate.numberOfReviews += 1;
//         // item.rate.rating =
//         //   (item.rate.rating + rating) / item.rate.numberOfReviews;
// console.log(newReview);
//       await newReview.save();
//     // await item.save();

//   }
//   )
// }
//  modifyProduct();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
