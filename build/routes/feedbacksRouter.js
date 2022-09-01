"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedbacksController_1 = require("../controllers/feedbacksController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router
    .route('/')
    .get(authMiddleware_1.authMiddleware, feedbacksController_1.getAllFeedbacks)
    .post(authMiddleware_1.authMiddleware, feedbacksController_1.createFeedback);
router
    .route("/:id")
    .get(authMiddleware_1.authMiddleware, feedbacksController_1.getFeedbackById)
    .put(authMiddleware_1.authMiddleware, feedbacksController_1.updateFeedbackById)
    .delete(authMiddleware_1.authMiddleware, feedbacksController_1.deleteFeedbackById);
exports.default = router;
//# sourceMappingURL=feedbacksRouter.js.map