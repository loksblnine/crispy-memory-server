"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedbacksController_1 = require("../controllers/feedbacksController");
const router = express_1.default.Router();
router
    .route('/all')
    .get(feedbacksController_1.getAllFeedbacks);
router
    .route("/")
    .post(feedbacksController_1.createFeedback);
router
    .route("/:id")
    .get(feedbacksController_1.getFeedbackById)
    .put(feedbacksController_1.updateFeedbackById)
    .delete(feedbacksController_1.deleteFeedbackById);
exports.default = router;
//# sourceMappingURL=feedbacksRouter.js.map