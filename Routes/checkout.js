import express from "express";
import { checkout } from "../Controller/checkoutController.js";
import { verifyUser } from "../utils/jwttoken.js";
const router = express.Router();

router.post("/:id", verifyUser, checkout);
export default router;
