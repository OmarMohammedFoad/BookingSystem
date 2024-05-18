import Users from "../models/Users.js";
import Rooms from "../models/Rooms.js";
import CheckoutCheckIn from "../models/Booking.js";
import { createError } from "../utils/Errors.js";

export const checkin = async (req, res, next) => {
  try {
    console.log(req.user);
    const user = await Users.findById(req.user.id);
    const room = await Rooms.findById(req.params.id);
    if (room.availablility == false) return next(createError("403", "the room is not available"));
    room.availablility = false;
    req.body.user = user._id;
    req.body.room = room._id;
    await room.save();
    const checkout = await CheckoutCheckIn(req.body);
    checkout.save();
    res.status(200).json({
      message: "the room has been reserverd",
      Date: new Date(),
      endDate: req.body.howlongtostay,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllReserveration = async (req, res) => {
  const reserverations = await CheckoutCheckIn.find().populate({
    path: "user room",
    select: "title desc availablility username country city phone ",
  });
  res.status(200).json({ record: reserverations });
};
