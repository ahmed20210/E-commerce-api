const router = require("express").Router();
const User = require("../models/user");
const Cart = require("../models/cart");
const Order = require("../models/order");
const { userValidationSchema } = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
// sign up function
const signUP = async (user) => {
  try {

    const { name, email, password } = user;
    const users = await User.findOne({ email: email });
    if (users) {
     return "Email already exists"
    } 
    else {
    const { error } = userValidationSchema.validate(user);
    if (error) {
      return error.details[0].message
    } else {
      const salt = 10;
      const hash = bcrypt.hashSync(password, salt);
      const newUser = new User({
        name,
        email,
        password: hash,
        whiteList: [],
      });
      const id = newUser._id;
      const cart = new Cart({
        user: id,
        products: [],
        total: 0,
      });
      const order = new Order({
        user: id,
        orders: [],
      });

      newUser.orders = order._id;
      newUser.cart = cart._id;
      await newUser.save();
      await cart.save();
      await order.save();
      return "User created";
    }
  }
  } catch (err) {
    return err;
  }
};
// sign up route
router.post("/signup", async (req, res) => {
  try {

  const { name , email, password } = req.body;
  const result = await signUP({ name, email, password });
 
  if (result === "Email already exists") {
    res.status(400).send(result);
  }
  else if (result === "User created") {
    res.status(200).send(result);
  }
  else {
    res.status(400).send(result);
  }
} catch (err) {
  res.status(400).send(err);
}

});

// log in 
const logIn = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return "User not found";
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return "Invalid password";
      } else {
        return user._id;
      }
    }
  } catch (err) {
    console.log(err);
  }
};
// create token
const createToken = (id) => {
  maxage = 30 * 24 * 60 * 60 * 1000;
  return JWT.sign({ id }, "user secret token", { expiresIn: maxage});
};
// authenticate user
const logInAuth = async (req, res, next) => {
  try {
  const { email, password } = req.body;
  const userID = await logIn(email, password);
  if (userID === "User not found") {
    res.status(400).send(userID);
  } else if (userID === "Invalid password") {
    res.status(400).send(userID);
  } else {
    const age = 30 * 24 * 60 * 60 * 1000;
    const token = createToken(userID);
    res.cookie("token", token, { maxAge: age, httpOnly: true, sameSite: "None" , secure: true});

    res.status(200).send( "logged in");
  }
  } catch (err) {
    console.log(err);
  }
};

// log out and delete token
const logOut = (req, res) => {
  try {
  res.cookie("token", "", { maxAge: null, httpOnly: true, sameSite: "None" , secure: true});
  res.status(200).send("logged out");
  } catch (err) {
    console.log(err);
  }
};
// log in and authenticate user route
router.post("/login", logInAuth);
// log out route
router.get("/logout", logOut);

module.exports = router;
