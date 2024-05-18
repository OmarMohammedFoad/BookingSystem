"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_js_1 = require("../Controller/UserController.js");
const express_1 = __importDefault(require("express"));
const jwttoken_js_1 = require("../utils/jwttoken.js");
const router = express_1.default.Router();
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })
router.get("/", jwttoken_js_1.verifyAdmin, UserController_js_1.GetUsers);
router.get("/:id", jwttoken_js_1.verifyUser, UserController_js_1.GetUser);
router.put("/:id", jwttoken_js_1.verifyUser, UserController_js_1.Update);
router.delete("/:id", jwttoken_js_1.verifyUser, UserController_js_1.DeleteOne);
exports.default = router;
