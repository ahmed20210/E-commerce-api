const Order = require("../models/order");
const Cart = require("../models/cart");
const Product = require("../models/product");
const router = require("express").Router();
const joi = require("joi");
const mongoose = require("mongoose");
// cancel order function
const cancelOrder = async (userId, orderId) => {
  try {
    const orderList = await Order.findOne({ user: userId });
    const order = orderList.orders.find(
      (order) => order._id.toString() === orderId
    );
    if (order) {
      const index = orderList.orders.indexOf(order);
      orderList.orders.splice(index, 1);
      await orderList.save();
      return "Order Cancelled";
    } else {
      console.log("order not found");
    }
  } catch (error) {
    console.log(error);
  }
};
const checkDone = (res, result) => {
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send("Error");
  }
};
// complete abd checkout order function
const completeOrder = async (userOrder) => {
  try {
    const time = 3 * 24 * 60 * 60 * 1000;
    const { user, to, phone, payment, notes } = userOrder;
    const cart = await Cart.findOne({ user: user });
    const products = await Product.find({ _id: { $in: cart.products } });
    const stock = products.map((product) => {
      product.quantity =
        product.quantity -
        cart.products.find(
          (item) => item.product.toString() === product._id.toString()
        ).quantity;
    });
    const userOrders = await Order.findOne({ user: user });
    if (stock.every((product) => product.quantity >= 0)) {
      const order = {
        products: cart.products,
        to,
        phone,
        total: cart.total,
        date: Date.now(),
        notes,
        payment: payment || "Cash On Delivery",
        _id: mongoose.Types.ObjectId(),
      };
      if (cart.products.length > 0) {
        userOrders.orders.push(order);
        cart.products = [];
        cart.total = 0;
        await cart.save();
        await userOrders.save();
      }
      // delete order after 3 days instead of order delvery time
      setTimeout(() => {
        cancelOrder(user, order._id.toString());
      }, time);
      return userOrders.orders;
    } else {
      return "Not Enough Stock";
    }
  } catch (err) {
    console.log(err);
  }
};
// get all orders function
router.get("/", async (req, res) => {
  try {
    const userOrders = await Order.findOne({ user: res.locals.user })
      .populate("orders.products.product")
      .select("orders");
    res.json(userOrders);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const userOrder = await Order.findOne({ user: res.locals.user });
    const theOrder = userOrder.orders.find(
      (o) => o.id.toString() === req.params.id
    );
    if (theOrder) {
      res.json(theOrder);
    } else {
      res.status(404).send("Order not found");
    }
  } catch (error) {
    console.log(error);
  }
});
// complete order function
router.post("/", async (req, res) => {
  try {
    const user = res.locals.user;
    const { to, phone, payment } = req.body;
    const notes = req.body.notes || "";
    const validate = joi
      .object({
        to: joi.string().required(),
        phone: joi.number().required(),
        payment: joi.string().required(),
        notes: joi.string(),
      })
      .validate(req.body);
    if (validate.error) {
      res.status(400).send(validate.error.details[0].message);
    } else {
      const result = await completeOrder({ user, to, phone, payment, notes });
      checkDone(res, result);
    }
  } catch (error) {
    console.log(error);
  }
});
// cancel order function
router.delete("/:id", async (req, res) => {
  try {
    const user = res.locals.user;
    const result = await cancelOrder(user, req.params.id);
    checkDone(res, result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
