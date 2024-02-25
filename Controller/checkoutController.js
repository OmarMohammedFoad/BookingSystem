import Users from "../models/Users.js";
import Rooms from "../models/Rooms.js";
import CheckoutCheckIn from "../models/CheckoutCheckIn.js";

export const checkout = async (req, res, next) => {
  try {
    console.log(req.user);
    const user = await Users.findById(req.user.id);
    const room = await Rooms.findById(req.params.id);

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
