import {AddNewroom,DeleteOne,GetAllRooms,GetRoom,Update} from "../Controller/RoomsController.js"
import express from "express";
import { verifyAdmin } from "../utils/jwttoken.js";
const router = express.Router();


router.get("/:id",verifyAdmin ,GetRoom);
router.get("/",verifyAdmin,GetAllRooms);

router.post("/:hotelID",verifyAdmin,AddNewroom);

router.delete("/:id/:hotelID",verifyAdmin,DeleteOne);
router.put("/:id",verifyAdmin,Update)

export default router