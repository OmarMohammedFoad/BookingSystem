import express, { Application } from "express";


import dotenv from "dotenv";
import db from "./models/db";
// import Estate from "./models/estate";
// import employee from "./models/employee";
// import Incharge from "./models/EstateSubject/incharge";
import Estate from "./Routes/estate"
import Country from "./Routes/EstateRoutes/country"
import cities from "./Routes/EstateRoutes/cities"
import estateType from "./Routes/EstateRoutes/estateTypes"
import incharge from "./Routes/EstateRoutes/incharge"
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

// routes
app.use("/api/v1/estate", Estate);
app.use("/api/v1/country",Country);
app.use("/api/v1/cities",cities);
app.use("/api/v1/estateTypes",estateType);
app.use("/api/v1/incharge",incharge);
 
app.listen(8800, async () => {
  console.log("Connected to backend.");

 





  try {
    await db.authenticate();
    console.log("Connected to database.");
  } catch (error) {
    console.log("Error: ", error);
  }
});
