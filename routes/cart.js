const router = require("express").Router();
const Cart = require("../models/cart");
const User = require("../models/user");
const Product = require("../models/product");
const Joi = require("joi");

const modifyCart = async (userId, productId, action, quantity) => {
  try { 
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    const cart = await Cart.findOne({ user: userId })
    const cartItem = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (user && product && cart) {
      if (action === "add") {
        
        if (!cartItem) {
          const newItem = {
            product: productId,
            quantity: 1,
            price: product.price,
          };
          cart.products.push(newItem);
          cart.total = cart.total + product.price;
          await cart.save();
          return {
            products: cart.products,
            total: cart.total,
          }
        }
      } else if (action === "delete") {
        if (cartItem) {
          cart.products.splice(cart.products.indexOf(cartItem), 1);
          cart.total = cart.total - product.price * cartItem.quantity;
          await cart.save();
          return {
            products: cart.products,
            total: cart.total,
          };
        }
      } else if (action === "decrease") {
        if (cartItem) {
          cartItem.quantity -= 1;
          cart.total -= product.price;
          if (cartItem.quantity === 0) {
            cart.products.splice(cart.products.indexOf(cartItem), 1);
          }

          await cart.save();
          return {
            products: cart.products,
            total: cart.total,
          };
        }
      } else if (action === "increase") {
        if (quantity > 0) {
          cartItem.quantity += quantity;
          cart.total += product.price * quantity;
          await cart.save();
          return {
            products: cart.products,
            total: cart.total,
          };
        }
      }
    } 
    if (user && cart){
     if (action === "remove") {
      cart.products = [];
      cart.total = 0;
      await cart.save();
      return {
        products: cart.products,
        total: cart.total,
      };
    } 
  }
  } catch (error) {
    return error;
  }
};
const checkDone = (res, result) => {
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send("Error");
  }
};
const addToCart = async (userId, productId) => {
  return modifyCart(userId, productId, "add");
};
const removeFromCart = async (userId, productId) => {
  return modifyCart(userId, productId, "delete");
};
const removeAllFromCart = async (userId) => {
  return modifyCart(userId, null , "remove");
};
const decreaseOne = async (userId, productId) => {
  return modifyCart(userId, productId, "decrease");
};
const increaseMany = async (userId, productId, quantity) => {
  return modifyCart(userId, productId, "increase", quantity || 1);
};
const getCart = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).select("products total");
  return cart;
};
router.post("/add", async (req, res) => {
  try {
    const userId = res.locals.user;
    const { productId } = req.body;
    const result = await addToCart(userId, productId);
    checkDone(res, result);
  } catch (err) {
    res.sendStatus(500);
  }
});
router.post("/delete", async (req, res) => {
  const userId = res.locals.user;
  const { productId } = req.body;
  const result = await removeFromCart(userId, productId);
  checkDone(res, result);
});
router.post("/remove", async (req, res) => {
  const userId = res.locals.user;
  const result = await removeAllFromCart(userId);
  checkDone(res, result);
});

router.post("/decrease", async (req, res) => {
  const userId = res.locals.user;
  const { productId } = req.body;
  const result = await decreaseOne(userId, productId);
  checkDone(res, result);
});
router.post("/increase", async (req, res) => {
  const userId = res.locals.user;
  const { productId, quantity } = req.body;

  const validate = Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number()
  }).validate(req.body);
  if (validate.error) {
    res.sendStatus(400);
  } else {
    const result = await increaseMany(userId, productId, quantity);
    checkDone(res, result);
  }
});
router.get("/", async (req, res) => {
  try {
    const userId = res.locals.user;
    const cart = await getCart(userId);
    res.send(cart);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
