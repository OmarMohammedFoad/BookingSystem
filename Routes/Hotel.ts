import { AddNewHotel } from "../Controller/HotelController";
import express from "express";
import { verifyAdmin } from "../utils/jwttoken";
const router = express.Router();

// router.get("/:id", verifyAdmin, GetHotel);
// router.get("/", verifyAdmin, GetAllHotel);
router.post("/", AddNewHotel);
// router.delete("/:id", verifyAdmin, DeleteOne);
// router.put("/:id", verifyAdmin, Update);

export default router;
