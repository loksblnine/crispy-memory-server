"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (request, response, next) => {
    try {
        const token = String(request?.headers?.authorization?.split(' ')[1]);
        if (!token) {
            response.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
        console.log(1234, decoded);
        if (decoded?.role === 1) {
            request.body.user = decoded;
            next();
        }
        else {
            response.status(401).json({ message: "Unauthorized" });
        }
    }
    catch (e) {
        response.status(401).json({ message: "Unauthorized" });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map