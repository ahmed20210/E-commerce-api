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
//you must add your own mongodb url
const URI =
  "add your mongodb uri here to connect to your mongodb database";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DataBase..."))
  .catch((err) => console.error("Could not connect to DataBase...", err));

app.use(bodyParser.json());
// allow cross-origin requests and allow credentials to send cookies
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
// export routes to app
app.use(user);
app.use("*", checkUser);
app.use("/product", product);
app.use("/orders", OAuth, order);
app.use("/cart", OAuth, cart);
app.use("/whitelist", OAuth, whitelist);

// get categories list route
app.get("/categories", async (req, res) => {
  try {
    const categorys = await category;
    res.json(categorys);
  } catch (err) {
    res.status(500).send(err);
  }
});
// get subcategories list route
app.get("/subcategories", async (req, res) => {
  try {
    const subcategorys = subcategory;
    res.json(subcategorys);
  } catch (err) {
    res.status(500).send(err);
  }
});
// Authentication user by frontend developer
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


// catch not existing requests
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
