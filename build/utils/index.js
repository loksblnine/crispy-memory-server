"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.generateJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJwt = (id, email, role, time) => {
    return jsonwebtoken_1.default.sign({ id, email, role }, String(process.env.SECRET_KEY), {
        expiresIn: time,
    });
};
exports.generateJwt = generateJwt;
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
};
exports.validateEmail = validateEmail;
//# sourceMappingURL=index.js.map