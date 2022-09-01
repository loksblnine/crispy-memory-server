/**
 * validationMiddleware.ts
 * */

import {NextFunction, Request, Response} from "express";
import {IValidationError} from "../types";
import {validateEmail} from "../utils";

export const validateEmailMiddleware = (request: Request, response: Response, next: NextFunction): Response | undefined => {
  try {
    const email = String(request.body.email);
    const errors: IValidationError = {};
    if (!email) {
      errors.email = "Email is required.";
    }
    if (!validateEmail(email)) {
      errors.email = "Use valid email.";
    }
    if (Object.getOwnPropertyNames(errors).length === 0) {
      next();
    } else {
      return response.status(403).json({message: "Forbidden", ...errors});
    }
  } catch (e) {
    return response.status(403).json({message: "Forbidden"});
  }
};

export const validateMarkMiddleware = (request: Request, response: Response, next: NextFunction): Response | undefined => {
  try {
    const mark = Number(request.body.mark);
    const errors: IValidationError = {};
    if (!mark) {
      errors.mark = "Mark is required.";
    }
    if (mark < 1 || mark > 5 || mark % 1 !== 0) {
      errors.mark = "Mark is invalid.";
    }
    if (Object.getOwnPropertyNames(errors).length === 0) {
      next();
    } else {
      return response.status(403).json({message: "Forbidden", ...errors});
    }
  } catch (e) {
    return response.status(403).json({message: "Forbidden"});
  }
};

