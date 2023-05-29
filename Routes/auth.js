import { Login, Registration } from "../Controller/authController.js"
import  express from "express";

const router = express.Router();



router.post("/login",Login)
router.post("/regist",Registration)


export default router;