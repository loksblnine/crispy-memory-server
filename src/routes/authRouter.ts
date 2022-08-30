/**
 * authRouter.ts
 * */

import express from "express";
import * as AuthController from "../controllers/authController";

const router = express.Router();

//validate input
router
  .route('/register')
  .post(AuthController.registerUser);

router
  .route("/login")
  .post(AuthController.loginUser);

export default router;