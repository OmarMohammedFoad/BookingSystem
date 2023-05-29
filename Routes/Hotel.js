import {AddNewHotel,GetHotel,DeleteOne,GetAllHotel,Update} from "../Controller/HotelController.js"
import express from "express";
import { verifyAdmin } from "../utils/jwttoken.js";
const router = express.Router();


router.get("/:id",verifyAdmin ,GetHotel);
router.get("/",verifyAdmin,GetAllHotel);
router.post("/",verifyAdmin,AddNewHotel);
router.delete("/:id",verifyAdmin,DeleteOne);
router.put("/:id",verifyAdmin,Update)

export default router