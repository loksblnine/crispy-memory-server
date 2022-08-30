"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("./authRouter"));
const feedbacksRouter_1 = __importDefault(require("./feedbacksRouter"));
const router = express_1.default.Router();
router.use("/auth", authRouter_1.default);
router.use("/feedbacks", feedbacksRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map