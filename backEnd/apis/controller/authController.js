const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");

const authVerification = (req, res, next) => {
  var validToken = req.headers["x-access-token"];
  console.log(validToken);
  if (!validToken) {
    return res.send({
      status: 400,
      auth: false,
      message: "No token provided.",
    });
  }
  jwt.verify(validToken, SECRET_KEY, async (err, valid) => {
    console.log("VALID", valid);
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Token Expired As Per Time" });
    }
    // if everything good, save to request for use in other routes
    req.userId = valid.userId;
    next();
  });
};

module.exports = authVerification;
