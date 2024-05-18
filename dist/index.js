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
const express_1 = __importDefault(require("express"));
const Hotel_1 = __importDefault(require("./Routes/Hotel"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./models/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
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
app.use("/api/hotel", Hotel_1.default);
app.listen(8800, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected to backend.");
    try {
        yield db_1.default.authenticate();
        console.log("Connected to database.");
    }
    catch (error) {
        console.log("Error: ", error);
    }
}));
