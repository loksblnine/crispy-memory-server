/**
 * authRouter.ts
 * */

import express from "express";
import * as AuthController from "../controllers/authController";
import {authMiddleware} from "../middlewares/authMiddleware";
import {validateEmailMiddleware} from "../middlewares/validationMiddleware";

const router = express.Router();

router
  .route('/register')
  .post(validateEmailMiddleware, AuthController.registerUser);

router
  .route("/login")
  .get(authMiddleware, AuthController.isTokenValid)
  .post(validateEmailMiddleware, AuthController.loginUser);

export default router;