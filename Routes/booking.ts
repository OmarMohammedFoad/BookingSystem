import express from "express";
import { checkin, getAllReserveration } from "../Controller/Booking.js";
import { verifyAdmin, verifyUser } from "../utils/jwttoken.js";
const router = express.Router();

router.post("/:id", verifyUser, checkin);
router.get("/", verifyAdmin, getAllReserveration);
export default router;
