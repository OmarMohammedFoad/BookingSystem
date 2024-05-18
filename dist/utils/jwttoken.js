"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = exports.verifyUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Errors_js_1 = require("./Errors.js");
const verifyToken = (req, res, next, callback) => {
    if (!req.cookies.access_token)
        return next((0, Errors_js_1.createError)(401, "You are not authenticated!"));
    jsonwebtoken_1.default.verify(req.cookies.access_token, process.env.JWT, (err, user) => {
        if (err)
            return next((0, Errors_js_1.createError)("403", "token is wrong"));
        req.user = user;
        next();
    });
};
const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        console.log(req.user);
        if (req.user.id !== undefined) {
            next();
        }
        else {
            return next((0, Errors_js_1.createError)(403, "You are not authorized!"));
        }
    });
};
exports.verifyUser = verifyUser;
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user);
        if (req.user.isAdmin !== undefined) {
            next();
        }
        else {
            return next((0, Errors_js_1.createError)(403, "You are not authorized!"));
        }
    }, next);
};
exports.verifyAdmin = verifyAdmin;
