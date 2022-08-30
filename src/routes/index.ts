/**
 * router.ts
 * */

import express from "express";
import authRouter from "./authRouter";
import feedbacksRouter from "./feedbacksRouter";

const router: express.Router = express.Router();

router.use("/auth", authRouter);
router.use("/feedbacks", feedbacksRouter);

export default router;