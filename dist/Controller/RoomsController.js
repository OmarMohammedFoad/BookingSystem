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
exports.Update = exports.DeleteOne = exports.GetAllRooms = exports.GetRoom = exports.AddNewroom = void 0;
const Rooms_js_1 = __importDefault(require("../models/Rooms.js"));
const Hotel_js_1 = __importDefault(require("../models/Hotel.js"));
const AddNewroom = (req, res, nxt) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const room = new Rooms_js_1.default(req.body);
    const hotelID = req.params.hotelID;
    console.log(hotelID);
    try {
        const savedroom = yield room.save();
        try {
            yield Hotel_js_1.default.findByIdAndUpdate(hotelID, {
                $push: { rooms: savedroom._id },
            });
        }
        catch (error) {
            console.log(error);
        }
        res.status(200).json(savedroom);
    }
    catch (error) {
        console.log(error);
        nxt(error);
    }
});
exports.AddNewroom = AddNewroom;
const GetRoom = (req, res, nxt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield Rooms_js_1.default.findById(req.params.id);
        // console.log(hotel);
        res.status(200).json(room);
    }
    catch (error) {
        nxt(error);
    }
});
exports.GetRoom = GetRoom;
const GetAllRooms = (req, res, nxt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield Rooms_js_1.default.find();
        console.log(room);
        if (room.length === 0) {
            res.status(400).json("nothing to show");
        }
        else {
            res.status(200).json(room);
        }
    }
    catch (error) {
        nxt(error);
    }
});
exports.GetAllRooms = GetAllRooms;
const DeleteOne = (req, res, nxt) => __awaiter(void 0, void 0, void 0, function* () {
    const HotelID = req.params.hotelID;
    try {
        const room = yield Rooms_js_1.default.findByIdAndDelete(req.params.id);
        try {
            yield Hotel_js_1.default.findByIdAndUpdate(HotelID, { $pull: { rooms: req.params.id } });
        }
        catch (error) { }
        res.status(200).json("room has been deleted");
    }
    catch (error) {
        nxt(error);
    }
});
exports.DeleteOne = DeleteOne;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield Rooms_js_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(room);
    }
    catch (error) {
        nxt(error);
    }
});
exports.Update = Update;
