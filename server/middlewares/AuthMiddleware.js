const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const userToken = req.header("userToken");

  if (!userToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(userToken, "secret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };