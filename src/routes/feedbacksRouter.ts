/**
 * userRouter.ts
 * */

import express from "express";
import {
  createFeedback,
  deleteFeedbackById,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedbackById
} from "../controllers/feedbacksController";

const router = express.Router();
router
  .route('/all')
  .get(getAllFeedbacks);

router
  .route("/")
  .post(createFeedback);

router
  .route("/:id")
  .get(getFeedbackById)
  .put(updateFeedbackById)
  .delete(deleteFeedbackById);

export default router;
