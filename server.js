const express = require("express");
const JWT = require("jsonwebtoken");
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
const Review = require("./models/reviews");
const { document, protectedAPIsThatRequireLogin } = require("./documents");
const Product = require("./models/product");
const User = require("./models/user");
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
  try {
    const categorys = await category;
    res.json(categorys);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/subcategories", async (req, res) => {
  try {
    const subcategorys = subcategory;
    res.json(subcategorys);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/oauth", (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token) {
      JWT.verify(token, "user secret token", (err, decoded) => {
        if (err) {
          res.status(401).send("Unauthorized");
        } else {
          res.status(200).send("Authorized");
        }
      });
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.set("viewengine", "ejs");
app.get("/", async (req, res) => {
  try {
    res.render("index.ejs", { document, protectedAPIsThatRequireLogin });
  } catch (err) {
    res.status(500).send(err);
  }
});
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
// const modifyProduct = async ()=>{

//       const review = "lorem ipsum review goes here"
//       const rating = Math.ceil(Math.random() * 5);
//       const item = await Product.findById("62dbf9762dd27153fa116539");
//       const user = await User.findById("62dbddfebf657a1157f265e5");
// const rate = {
//   user: "62dbddfebf657a1157f265e5",
//   product: "62dbf9762dd27153fa116539",
//   review: review,
//   rating: rating,
//   name: user.name,
// };
//       const newReview = new Review(rate);

//         item.rate.reviews.push(newReview._id);
//         item.rate.numberOfReviews += 1;
//         item.rate.rating =
//           (item.rate.rating + rating) / item.rate.numberOfReviews;
// console.log(newReview);
//       await newReview.save();
//     await item.save();

// const p = await Product.findById("62dbf9762dd27153fa116539")
//   .populate("rate.reviews", "-product")

//   console.log(p.rate.reviews);
// }
//  modifyProduct();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
