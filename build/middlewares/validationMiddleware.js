"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMarkMiddleware = exports.validateEmailMiddleware = void 0;
const utils_1 = require("../utils");
const validateEmailMiddleware = (request, response, next) => {
    try {
        const email = String(request.body.email);
        const errors = {};
        if (!email) {
            errors.email = "Email is required.";
        }
        if (!(0, utils_1.validateEmail)(email)) {
            errors.email = "Use valid email.";
        }
        if (Object.getOwnPropertyNames(errors).length === 0) {
            next();
        }
        else {
            return response.status(403).json({ message: "Forbidden", ...errors });
        }
    }
    catch (e) {
        return response.status(403).json({ message: "Forbidden" });
    }
};
exports.validateEmailMiddleware = validateEmailMiddleware;
const validateMarkMiddleware = (request, response, next) => {
    try {
        const mark = Number(request.body.mark);
        const errors = {};
        if (!mark) {
            errors.mark = "Mark is required.";
        }
        if (mark < 1 || mark > 5 || mark % 1 !== 0) {
            errors.mark = "Mark is invalid.";
        }
        if (Object.getOwnPropertyNames(errors).length === 0) {
            next();
        }
        else {
            return response.status(403).json({ message: "Forbidden", ...errors });
        }
    }
    catch (e) {
        return response.status(403).json({ message: "Forbidden" });
    }
};
exports.validateMarkMiddleware = validateMarkMiddleware;
//# sourceMappingURL=validationMiddleware.js.map