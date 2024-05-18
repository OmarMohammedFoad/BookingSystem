import { NextFunction, Request, Response } from "express";
import Hotel from "../models/Hotel"
export const AddNewHotel = async (req:Request, res:Response, nxt:NextFunction) => {
  console.log(req.body,"req.body");
  
  try {
    const hotel = await Hotel.create({
      name:req.body.name,
      description:req.body.description,
      location:req.body.location,
      image:req.body.image
    });
    res.status(200).json(hotel);
  } catch (error) {
    nxt(error);
  }
};

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
