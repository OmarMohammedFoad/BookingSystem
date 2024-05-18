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
exports.AddNewHotel = void 0;
const Hotel_1 = __importDefault(require("../models/Hotel"));
const AddNewHotel = (req, res, nxt) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "req.body");
    try {
        const hotel = yield Hotel_1.default.create({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            image: req.body.image
        });
        res.status(200).json(hotel);
    }
    catch (error) {
        nxt(error);
    }
});
exports.AddNewHotel = AddNewHotel;
// export const GetHotel = async (req, res, nxt) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     // console.log(hotel);
//     res.status(200).json(hotel);
//   } catch (error) {
//     nxt(error);
//   }
// };
// export const GetAllHotel = async (req, res, nxt) => {
//   try {
//     const hotel = await Hotel.find();
//     if (hotel.length === 0) {
//       res.status(200).json("nothing to show");
//     } else {
//       res.status(200).json(hotel);
//     }
//   } catch (error) {
//     nxt(error);
//   }
// };
// export const DeleteOne = async (req, res, nxt) => {
//   try {
//     const hotel = await Hotel.findByIdAndDelete(req.params.id);
//     res.status(200).json(hotel);
//   } catch (error) {
//     nxt(error);
//   }
// };
// export const Update = async (req, res) => {
//   try {
//     console.log(req.params.id);
//     const hotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body });
//     res.status(200).json(hotel);
//   } catch (error) {
//     nxt(error);
//   }
// };
