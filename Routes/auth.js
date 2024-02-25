import { Login, Registration, resetPassword, validateEmail, validateResetEmail } from "../Controller/authController.js";
import express from "express";

const router = express.Router();

router.post("/login", Login);
router.post("/regist", Registration);
router.post("/validateEmail", validateEmail);
router.post("/validateResetEmail", validateResetEmail);
router.post("/resetPassword", resetPassword);

export default router;
