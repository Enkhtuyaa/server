 import jwt from "jsonwebtoken";
 const JWT_SECRET = process.env.JWT_SECRET;
 export const requireToken = (request, response, next) => {
  const token = request.headers.authorization.split(" ")[1] || null;
  console.log(token);
  if (!token) {
    response.status(401).json({ message: "Token required" });
  }
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log("this is my user", user);
    request.user = user;
    next();
  } catch (error) {
    console.log(err);
    response.status(401).json({ message: "Invalid or expired token" });
  }
};