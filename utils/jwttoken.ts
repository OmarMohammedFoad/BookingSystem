import jwt from "jsonwebtoken";
import { createError } from "./Errors.js";
import { NextFunction,  } from "express";

const verifyToken = (req:any, res:any, next:NextFunction,callback:Function) => {
  if (!req.cookies.access_token) return next(createError(401, "You are not authenticated!"));
  jwt.verify(req.cookies.access_token, `${process.env.JWT}`, (err:any, user:any) => {
    if (err) return next(createError("403", "token is wrong"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req:any, res:any, next:NextFunction) => {
  verifyToken(req, res, next,()=>{
    console.log(req.user);
    if (req.user.id !== undefined) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  }) 
};

export const verifyAdmin = (req:any, res:any, next:any) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    if (req.user.isAdmin !== undefined) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  },next);
};
