"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReserveration = exports.checkin = void 0;
const Users_js_1 = __importDefault(require("../models/Users.js"));
const Rooms_js_1 = __importDefault(require("../models/Rooms.js"));
const Booking_js_1 = __importDefault(require("../models/Booking.js"));
const Errors_js_1 = require("../utils/Errors.js");
const checkin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.user);
        const user = yield Users_js_1.default.findById(req.user.id);
        const room = yield Rooms_js_1.default.findById(req.params.id);
        if (room.availablility == false)
            return next((0, Errors_js_1.createError)("403", "the room is not available"));
        room.availablility = false;
        req.body.user = user._id;
        req.body.room = room._id;
        yield room.save();
        const checkout = yield (0, Booking_js_1.default)(req.body);
        checkout.save();
        res.status(200).json({
            message: "the room has been reserverd",
            Date: new Date(),
            endDate: req.body.howlongtostay,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.checkin = checkin;
const getAllReserveration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reserverations = yield Booking_js_1.default.find().populate({
        path: "user room",
        select: "title desc availablility username country city phone ",
    });
    res.status(200).json({ record: reserverations });
});
exports.getAllReserveration = getAllReserveration;
