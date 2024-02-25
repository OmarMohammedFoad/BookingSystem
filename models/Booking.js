import mongoose from "mongoose";
const checoutCheckin = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },

  room: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Room",
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  checkoutDate: String,
  checkinDate: String,
});

export default mongoose.model("Checout", checoutCheckin);
