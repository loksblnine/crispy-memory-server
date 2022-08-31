/**
 * feedbacksController.ts
 * */

import {Request, Response} from "express";
import {Feedback} from "../database/models";

export const getAllFeedbacks = async (request: Request, response: Response): Promise<Response> => {
  try {
    const limit = Number(request.query.limit) || 10,
      offset = Number(request.query.page) * 10 || 0;

    const feedbacks = await Feedback.findAll({
      limit,
      offset
    });
    return response.status(201).json(feedbacks);
  } catch (err) {
    console.log(1234, err);
    return response.status(500).json({message: "Something went wrong"});
  }
};

export const createFeedback = async (request: Request, response: Response): Promise<Response> => {
  try {
    const text = String(request.body.text),
      mark = Number(request.body.mark),
      user_id = Number(request.body.user_id);

    const feedbacks = await Feedback.create({
      text, mark, time: new Date(), user_id
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
      user_id = Number(request.body.user_id);

    const feedbacks = await Feedback.update({
      text, mark, time: new Date(), user_id
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
