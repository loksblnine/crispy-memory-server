/**
 * authRouter.ts
 * */

import express from "express";
import * as AuthController from "../controllers/authController";
import {authMiddleware} from "../middlewares/authMiddleware";

const router = express.Router();

//validate input
router
  .route('/register')
  .post(AuthController.registerUser);

router
  .route("/login")
  .get(authMiddleware, AuthController.isTokenValid)
  .post(AuthController.loginUser);

export default router;