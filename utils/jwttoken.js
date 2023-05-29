import jwt from "jsonwebtoken";
import {createError} from "../utils/Errors.js"


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return  createError(401,"there is no token!");

    }
  
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err)  return  next(createError(401,"token is not valid!"));

      req.user = user;
      next();
    });
  };


export const verifyUser = (req, res, next) => {
    verifyToken(req, res,() => {
        console.log(req.user.id);
        console.log(req.params.id);
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return  next(createError(401,"you are not authorized!"));
      }
    });
  };

  export const verifyAdmin = (req, res, next) => {

    verifyToken(req, res,() => {
      if (req.user.isAdmin) {
        console.log(req.user.isAdmin);

        next();
      } else {  
      return next(createError(401,"you are not authorized!"));    
      }
    });
  };