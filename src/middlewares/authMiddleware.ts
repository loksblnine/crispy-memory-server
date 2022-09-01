import jwt, {JwtPayload} from "jsonwebtoken"
import {NextFunction, Request, Response} from "express";

export const authMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  try {
    const token = String(request?.headers?.authorization?.split(' ')[1])
    if (!token) {
      response.status(401).json({message: "Unauthorized"})
    }
    const decoded = jwt.verify(token, String(process.env.SECRET_KEY)) as JwtPayload
    if (decoded?.role === 1) {
      request.body.user = decoded
      next()
    } else {
      response.status(401).json({message: "Unauthorized"})
    }
  } catch (e) {
    response.status(401).json({message: "Unauthorized"})
  }
}