"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTokenValid = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../database/models");
const utils_1 = require("../utils");
const registerUser = async (request, response) => {
    try {
        const email = String(request.body.email), password = String(request.body.password), role = Number(request.body.role);
        const encryptedPassword = await bcrypt_1.default.hash(password, 5);
        const newUser = await models_1.User.create({
            email, password: encryptedPassword, role
        });
        const token = (0, utils_1.generateJwt)(newUser.id, email, role, "2h");
        return response.status(201).json({ token });
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.registerUser = registerUser;
const loginUser = async (request, response) => {
    try {
        const email = request.body.email, password = request.body.password;
        if (!(email && password)) {
            return response.status(401).json({ message: "All input is required" });
        }
        const oldUsers = await models_1.User.findAll({
            where: {
                email
            },
            raw: true
        });
        for (let i = 0; i < oldUsers?.length; i++) {
            const passwordMatch = await bcrypt_1.default.compare(password, oldUsers[i]?.password);
            if (passwordMatch) {
                const token = (0, utils_1.generateJwt)(oldUsers[i].id, oldUsers[i].email, oldUsers[i].role, "2h");
                return response.status(200).json({ token });
            }
        }
        return response.status(500).json({ message: "Use correct credentials" });
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.loginUser = loginUser;
const isTokenValid = async (request, response) => {
    const token = (0, utils_1.generateJwt)(request.body.user.id, request.body.user.email, request.body.user.role, "2h");
    response.status(200).json({ token });
};
exports.isTokenValid = isTokenValid;
//# sourceMappingURL=authController.js.map