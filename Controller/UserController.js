import Users from "../models/Users.js";

export const GetUsers = async (req, res) => {
  try {
    const users = await Users.find();
    if (users.length === 0) {
      res.status(200).json("No users");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
  }
};

export const GetUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(200).json("not found");
    }
  } catch (error) {
    console.log(error);
  }
};

export const DeleteOne = async (req, res, nxt) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    nxt(error);
  }
};

export const Update = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await Users.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(user);
  } catch (error) {
    nxt(error);
  }
};
