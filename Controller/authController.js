import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { mailer } from "../helper/mailer.js";
import { verifyCode } from "../helper/verificationCode.js";
dotenv.config();
var salt = bcrypt.genSaltSync(10);

export const Registration = async (req, res, nxt) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  const User = new Users({ ...req.body, password: hash });
  try {
    const newuser = await User.save();

    res.status(200).json(newuser);
  } catch (error) {
    nxt(error);
  }
};

export const Login = async (req, res, nxt) => {
  try {
    // const user = await Users.findOne({ username: req.body.username });
    // if (!user) {
    //   return res.status(404).json("user is not found");
    // }

    // const check_password = await bcrypt.compare(req.body.password, user.password);
    // if (!check_password) {
    //   return res.status(400).json("the password is wrong");
    // }

    // const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
    // const { password, isAdmin, ...otherdetails } = user._doc;
    let token = "";
    const user = await Users.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: "the user is not registerd " });
    }

    bcrypt.compare(req.body.password, user.password, async (err, response) => {
      if (response) {
        token = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT);
        const { password, isAdmin, ...otherdetails } = user._doc;
        await mailer("omarfouad15e@gmail.com", "omarfouad15e@gmail.com", "hello", "hello", "hello");
        return res.cookie("access_token", token, { httpOnly: true }).status(200).json({ details: otherdetails });
      } else {
        return res.status(400).json({ message: "the password is wrong" });
      }
    });
  } catch (error) {
    nxt(error);
  }
};

export const validateEmail = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: "the user is not registerd " });
  if (user) {
    let code = verifyCode(5);

    await mailer("omarfoaud15e@gmail.com", user.email, "verification code", `the verifcation code is ${code}`, `the verifcation code is ${code}`);
    user.code = code;
    await user.save();

    res.status(200).json({ message: "please see check your email", code: code });
  }
};

export const validateResetEmail = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    return res.status(500).json({ message: "the user is not registerd " });
  } else if (!user || (user && req.body.code != user.code)) {
    return res.status(401).json({ message: "the code is invalid" });
  } else {
    res.status(200).json({ message: "the code is valid" });
  }
};

export const resetPassword = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(500).json({ message: "the user is not registerd " });
  let newPassword = "";
  try {
    if (req.body.password === req.body.confiramtionPassword) {
      newPassword = await bcrypt.hash(req.body.password, salt);
      user.password = newPassword;
      user.code = "";
      await user.save();
      res.status(200).json({ message: "password has been created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "there is something error" });
  }
};
