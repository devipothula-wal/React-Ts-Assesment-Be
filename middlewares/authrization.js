const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authMiddleware = (req, res, next) => {
  // Get token from headers
  const token = req.headers["authorization"]?.split(" ")[1]; // Expecting 'Bearer <token>'
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Attach the decoded payload (e.g., userId) to the request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
};
