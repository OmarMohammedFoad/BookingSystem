import {GetUsers,GetUser, Update,DeleteOne} from "../Controller/UserController.js";
import express from "express"
import { verifyAdmin,verifyUser } from "../utils/jwttoken.js";

 const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })
router.get("/",verifyAdmin,GetUsers);

router.get("/:id",verifyUser,GetUser);
router.put("/:id",verifyUser,Update);
router.delete("/:id",verifyUser,DeleteOne);



export default router