/**
 * feedbacksRouter.ts
 * */

import express from "express";
import {
  createFeedback,
  deleteFeedbackById,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedbackById
} from "../controllers/feedbacksController";
import {authMiddleware} from "../middlewares/authMiddleware";
import {validateEmailMiddleware, validateMarkMiddleware} from "../middlewares/validationMiddleware";

const router = express.Router();
router
  .route('/')
  .get(authMiddleware, getAllFeedbacks)
  .post(validateEmailMiddleware, validateMarkMiddleware, createFeedback);

router
  .route("/:id")
  .get(authMiddleware, getFeedbackById)
  .put(authMiddleware, validateEmailMiddleware, validateMarkMiddleware, updateFeedbackById)
  .delete(authMiddleware, deleteFeedbackById);

export default router;
