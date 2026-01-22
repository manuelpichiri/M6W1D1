const jwt = require("jsonwebtoken");
const excludedRoutes = ["/auth/login"];

const verifyToken = (req, res, next) => {
  if (excludedRoutes.includes(req.path)) {
    return next();
  }
  const token = req.header("authorization");

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).send({
      statusCode: 401,
      message: "Token not found",
    });
  }
  try {
    const sanitizeToken = token.split(" ")[1];
    const decodedToken = jwt.verify(sanitizeToken, process.env.JWT_SECRET); //controlla che il token sia valido confrontandolo con quello nel file .ENV
    req.author = decodedToken;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = verifyToken;
