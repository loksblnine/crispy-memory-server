/**
 * feedbacksController.ts
 * */

import {Request, Response} from "express";
import {Feedback, User} from "../database/models";
import {Op} from "sequelize";

export const getAllFeedbacks = async (request: Request, response: Response): Promise<Response> => {
  try {
    const limit = Number(request.query.limit) || 10,
      offset = Number(request.query.page) * 10 || 0;
    const where: any = {};
    if (request.query.text) {
      where.text = {
        [Op.like]: '%' + request.query.text + '%'
      };
    }
    const feedbacks = await Feedback.findAll({
      where,
      limit,
      offset
    });
    return response.status(201).json(feedbacks);
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const createFeedback = async (request: Request, response: Response): Promise<Response> => {
  try {
    const text = String(request.body.text),
      mark = Number(request.body.mark),
      email = String(request.body.email);

    const user: [User, boolean] = await User.findCreateFind({
        where: {
          email: email
        },
        defaults: {
          email,
          password: "",
          role: 2
        },
        raw: true
      }
    );
    const feedbacks = await Feedback.create({
      text, mark, time: new Date(), user_id: Number(user[0].id)
    });
    return response.status(201).json(feedbacks);
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const getFeedbackById = async (request: Request, response: Response): Promise<Response> => {
  try {
    const id = Number(request.params.id);
    const feedbacks = await Feedback.findOne({
      attributes: ["id", "email", "role"],
      where: {
        id
      }
    });
    return response.status(201).json(feedbacks);
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const deleteFeedbackById = async (request: Request, response: Response): Promise<Response> => {
  try {
    const id = Number(request.params.id);
    await Feedback.destroy({
      where: {
        id
      }
    });
    return response.status(201).json({message: "Feedback was removed."});
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const updateFeedbackById = async (request: Request, response: Response): Promise<Response> => {
  try {
    const id = Number(request.params.id);
    const text = String(request.body.text),
      mark = Number(request.body.mark),
      email = String(request.body.email);
    const user: [User, boolean] = await User.findCreateFind({
        where: {
          email: email
        },
        defaults: {
          email,
          password: "",
          role: 2
        },
        raw: true
      }
    );
    const feedbacks = await Feedback.update({
      text, mark, time: new Date(), user_id: Number(user[0].id)
    }, {
      where: {
        id
      }
    });
    return response.status(201).json(feedbacks);
  } catch (err) {
    return response.status(500).json({message: "Something went wrong"});
  }
};
