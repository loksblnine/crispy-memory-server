/**
 * authController.ts
 * */

import bcrypt from "bcrypt";
import {Request, Response} from "express";
import {User} from "../database/models";
import {generateJwt} from "../utils";

export const registerUser = async (request: Request, response: Response): Promise<Response> => {
  try {
    const email = String(request.body.email),
      password = String(request.body.password),
      role = Number(request.body.role);

    const encryptedPassword: string = await bcrypt.hash(password, 5);

    const newUser: User = await User.create({
      email, password: encryptedPassword, role
    });

    const token: string = generateJwt(newUser.id, email, role, "2h");

    return response.status(201).json({token});
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const loginUser = async (request: Request, response: Response): Promise<Response> => {
  try {
    const email: string = request.body.email,
      password: string = request.body.password;

    if (!(email && password)) {
      return response.status(401).json({message: "All input is required"});
    }

    const oldUsers: User[] = await User.findAll({
      where: {
        email
      },
      raw: true
    });

    for (let i = 0; i < oldUsers?.length; i++) {
      const passwordMatch: boolean = await bcrypt.compare(password, oldUsers[i]?.password);
      if (passwordMatch) {
        const token = generateJwt(oldUsers[i].id, oldUsers[i].email, oldUsers[i].role, "2h");
        return response.status(200).json({token});
      }
    }
    return response.status(500).json({message: "Use correct credentials"});
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const isTokenValid = async (request: Request, response: Response): Promise<void> => {
  const token = generateJwt(request.body.user.id, request.body.user.email, request.body.user.role, "2h")
  response.status(200).json({token});
}
