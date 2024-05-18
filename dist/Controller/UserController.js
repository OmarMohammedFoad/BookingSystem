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
exports.Update = exports.DeleteOne = exports.GetUser = exports.GetUsers = void 0;
const Users_js_1 = __importDefault(require("../models/Users.js"));
const GetUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users_js_1.default.find();
        if (users.length === 0) {
            res.status(200).json("No users");
        }
        else {
            res.status(200).json(users);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetUsers = GetUsers;
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Users_js_1.default.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(200).json("not found");
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetUser = GetUser;
const DeleteOne = (req, res, nxt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Users_js_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        nxt(error);
    }
});
exports.DeleteOne = DeleteOne;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.id);
        const user = yield Users_js_1.default.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(user);
    }
    catch (error) {
        nxt(error);
    }
});
exports.Update = Update;
