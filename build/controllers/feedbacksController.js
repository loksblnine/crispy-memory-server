"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFeedbackById = exports.deleteFeedbackById = exports.getFeedbackById = exports.createFeedback = exports.getAllFeedbacks = void 0;
const models_1 = require("../database/models");
const sequelize_1 = require("sequelize");
const getAllFeedbacks = async (request, response) => {
    try {
        const limit = Number(request.query.limit) || 10, offset = Number(request.query.page) * 10 || 0;
        const where = {};
        if (request.query.text) {
            where.text = {
                [sequelize_1.Op.like]: '%' + request.query.text + '%'
            };
        }
        const feedbacks = await models_1.Feedback.findAll({
            where,
            limit,
            offset
        });
        return response.status(201).json(feedbacks);
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.getAllFeedbacks = getAllFeedbacks;
const createFeedback = async (request, response) => {
    try {
        const text = String(request.body.text), mark = Number(request.body.mark), email = String(request.body.email);
        const user = await models_1.User.findCreateFind({
            where: {
                email: email
            },
            defaults: {
                email,
                password: "",
                role: 2
            },
            raw: true
        });
        const feedbacks = await models_1.Feedback.create({
            text, mark, time: new Date(), user_id: Number(user[0].id)
        });
        return response.status(201).json(feedbacks);
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.createFeedback = createFeedback;
const getFeedbackById = async (request, response) => {
    try {
        const id = Number(request.params.id);
        const feedbacks = await models_1.Feedback.findOne({
            attributes: ["id", "email", "role"],
            where: {
                id
            }
        });
        return response.status(201).json(feedbacks);
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.getFeedbackById = getFeedbackById;
const deleteFeedbackById = async (request, response) => {
    try {
        const id = Number(request.params.id);
        await models_1.Feedback.destroy({
            where: {
                id
            }
        });
        return response.status(201).json({ message: "Feedback was removed." });
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.deleteFeedbackById = deleteFeedbackById;
const updateFeedbackById = async (request, response) => {
    try {
        const id = Number(request.params.id);
        const text = String(request.body.text), mark = Number(request.body.mark), email = String(request.body.email);
        const user = await models_1.User.findCreateFind({
            where: {
                email: email
            },
            defaults: {
                email,
                password: "",
                role: 2
            },
            raw: true
        });
        const feedbacks = await models_1.Feedback.update({
            text, mark, time: new Date(), user_id: Number(user[0].id)
        }, {
            where: {
                id
            }
        });
        return response.status(201).json(feedbacks);
    }
    catch (err) {
        return response.status(500).json({ message: "Something went wrong" });
    }
};
exports.updateFeedbackById = updateFeedbackById;
//# sourceMappingURL=feedbacksController.js.map