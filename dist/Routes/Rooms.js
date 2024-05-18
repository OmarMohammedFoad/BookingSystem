"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoomsController_js_1 = require("../Controller/RoomsController.js");
const express_1 = __importDefault(require("express"));
const jwttoken_js_1 = require("../utils/jwttoken.js");
const router = express_1.default.Router();
router.get("/:id", jwttoken_js_1.verifyAdmin, RoomsController_js_1.GetRoom);
router.get("/", jwttoken_js_1.verifyAdmin, RoomsController_js_1.GetAllRooms);
router.post("/:hotelID", jwttoken_js_1.verifyAdmin, RoomsController_js_1.AddNewroom);
router.delete("/:id/:hotelID", jwttoken_js_1.verifyAdmin, RoomsController_js_1.DeleteOne);
router.put("/:id", jwttoken_js_1.verifyAdmin, RoomsController_js_1.Update);
exports.default = router;
