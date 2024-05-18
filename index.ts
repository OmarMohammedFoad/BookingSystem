import express, { Application } from "express";
import HotelRoute from "./Routes/Hotel"

import dotenv from "dotenv";
import db from "./models/db";
dotenv.config();

const app:Application = express() 






// middlewares
app.use(express.json());
// app.use(cookieParser());



// app.use((err:any, req:Request, res:Response, next:NextFunction) => {
//   const errStatus = err.status || 500;
//   const errMess = err.message || "Something went wrong!";
//   return res.status(errStatus).json({
//     success: false,
//     status: errStatus,
//     message: errMess,
//     stack: err.stack,
//   });
// });
app.use("/api/hotel",HotelRoute)
app.listen(8800, async () => {
  console.log("Connected to backend.");
  try {
    await db.authenticate();
    console.log("Connected to database.");
  } catch (error) {
    console.log("Error: ", error);
  }
});
