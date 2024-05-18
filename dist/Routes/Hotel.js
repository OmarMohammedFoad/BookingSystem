"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HotelController_1 = require("../Controller/HotelController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// router.get("/:id", verifyAdmin, GetHotel);
// router.get("/", verifyAdmin, GetAllHotel);
router.post("/", HotelController_1.AddNewHotel);
// router.delete("/:id", verifyAdmin, DeleteOne);
// router.put("/:id", verifyAdmin, Update);
exports.default = router;
