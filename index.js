import express from "express";
const app = express()
import mongoose from "mongoose";
import Hotels from "./Routes/Hotel.js"
import Users from "./Routes/Users.js";
import auth from "./Routes/auth.js";
import rooms from "./Routes/Rooms.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();


const connect = async ()=>
{
    try {
        console.log("connected to database");
        await mongoose.connect(process.env.mongo);
      } catch (error) {
        console.log(error);
      }
}


mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });



// middlewares
app.use(express.json())
app.use(cookieParser())

app.use("/api/hotel",Hotels)
app.use("/api/users",Users)
app.use("/api/auth",auth)
app.use("/api/rooms",rooms)



app.use((err,req,res,next)=>
{
  const errStatus = err.status || 500;
  const errMess = err.message || "Something went wrong!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMess,
  });

});


  app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });
