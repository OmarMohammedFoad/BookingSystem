"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Booking_js_1 = require("../Controller/Booking.js");
const jwttoken_js_1 = require("../utils/jwttoken.js");
const router = express_1.default.Router();
router.post("/:id", jwttoken_js_1.verifyUser, Booking_js_1.checkin);
router.get("/", jwttoken_js_1.verifyAdmin, Booking_js_1.getAllReserveration);
exports.default = router;
