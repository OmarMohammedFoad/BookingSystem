"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCode = void 0;
const verifyCode = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
};
exports.verifyCode = verifyCode;
