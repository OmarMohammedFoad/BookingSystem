import jwt from "jsonwebtoken";
import { createError } from "../utils/Errors.js";

const verifyToken = (req, res, next) => {
  console.log(req.cookies.access_token);
  if (!req.cookies.access_token) return next(createError(401, "You are not authenticated!"));
  jwt.verify(req.cookies.access_token, process.env.JWT, (err, user) => {
    if (err) return next(createError("403", "token is wrong"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(401, "you are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    if (req.user.isAdmin !== undefined) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
