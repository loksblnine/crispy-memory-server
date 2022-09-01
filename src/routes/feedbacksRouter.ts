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

const router = express.Router();
router
  .route('/')
  .get(authMiddleware, getAllFeedbacks)
  //validate mark
  .post(authMiddleware, createFeedback);

router
  .route("/:id")
  .get(authMiddleware, getFeedbackById)
  //validate mark
  .put(authMiddleware, updateFeedbackById)
  .delete(authMiddleware, deleteFeedbackById);

export default router;
