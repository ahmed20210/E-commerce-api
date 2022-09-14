const JWT = require("jsonwebtoken");
// user authentication in protected routes
const OAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    JWT.verify(token, "user secret token", (err, decoded) => {
      if (err) {
        res.send("Unauthorized");
      } else {
         next();
      }
    });
  } else {
    res.send("Unauthorized");
  }
};
// check if user is logged in with every route
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
