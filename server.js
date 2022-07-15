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
const { document, protectedAPIsThatRequireLogin } = require("./documents");
const URI =
  "mongodb+srv://ahmedmostafa:01144781238ahmed@ecommerce.lxpr7.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect( URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(bodyParser.json());
app.use(cors());
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
}
)


app.set("viewengine", "ejs")
app.get("/", async(req,res)=>{
  res.render("index.ejs", { document, protectedAPIsThatRequireLogin });
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
