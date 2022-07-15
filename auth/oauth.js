const JWT = require("jsonwebtoken");

const OAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    JWT.verify(token, "user secret token", (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized");
      } else {
        next();
        res.send("Authorized");
      }
    });
  } else {
    res.redirect("/login").send("Unauthorized");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    JWT.verify(token, "user secret token", (err, decoded) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        res.locals.user = decoded.id;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
}
module.exports = { OAuth, checkUser };
