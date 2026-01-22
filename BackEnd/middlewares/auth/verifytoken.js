const jwt = require("jsonwebtoken");
const excludedRoutes = ["/auth/login"];

const verifyToken = (req, res, next) => {
  if (excludedRoutes.includes(req.path)) {
    return next();
  }
  const token = req.header("authorization");

  if (!token) {
    return res.status(401).send({
      statusCode: 401,
      message: "Token not found",
    });
  }
  try {
    const sanitizeToken = token.replace("Bearer ", "");
    const decodedToken = jwt.verify(sanitizeToken, process.env.JWT_SECRET); //controlla che il token sia valido confrontandolo con quello nel file .ENV
    req.author = decodedToken;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = verifyToken;
