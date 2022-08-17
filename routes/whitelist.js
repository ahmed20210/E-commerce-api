const router = require("express").Router();
const User = require("../models/user");
const Product = require("../models/product");

const checkDone = (res, result) => {
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send("Error");
  }
};
const addTOWhitelist = async (userID, productID) => {
  try {
    const user = await User.findById(userID);
    const product = await User.findById(userID);
    const checkExist = user.whiteList.find((item) => item.toString() === productID);
    if (!user) {
      return "login frist";
    } else {
      if (product) {
        if (!checkExist) {
          user.whiteList.push(productID);
          await user.save();
          return "add success";
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
const removeFromWhitelist = async (userID, productID) => {
  try {
    const user = await User.findById(userID);
    const product = await User.findById(userID);
    const index = user.whiteList.indexOf(productID);
    if (!user) {
      return "login frist";
    } else {
      if (product) {
        user.whiteList.splice(index, 1);
        await user.save();
        return "remove success";
      }
    }
  } catch (err) {
    console.log(err);
  }
};
const getWhitelist = async (userID) => {
  try {
    const user = await User.findById(userID).populate("whiteList");
    if (!user) {
      return "login frist";
    } else {
      return user.whiteList;
    }
  } catch (err) {
    console.log(err);
  }
};
router.post("/:id/add", async (req, res) => {
  const userID = res.locals.user;
  const productID = req.params.id;
  const result = await addTOWhitelist(userID, productID);
 checkDone(res, result); 
});
router.post("/:id/remove", async (req, res) => {
  const userID = res.locals.user;
  const productID = req.params.id;
  const result = await removeFromWhitelist(userID, productID);
 checkDone(res, result) 
});
router.get("/", async (req, res) => {
  const userID = res.locals.user;

  const result = await getWhitelist(userID);
  res.json(result);
});
module.exports = router;
