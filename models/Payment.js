import mongoose from "mongoose";

const payment = new mongoose.Schema(
  {
    bookingID: { type: mongoose.Types.ObjectId, required: true, ref: "Checout" },
    amount: { type: Number, required: true },
    paymentMethod: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PaymentMethod", payment);
