"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
class Feedback extends sequelize_1.Model {
}
exports.Feedback = Feedback;
Feedback.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    mark: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    time: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: config_1.sequelize,
    tableName: 'feedbacks',
    schema: 'public',
    timestamps: false,
    indexes: [
        {
            name: "feedbacks_pk",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
        {
            name: "feedbacks_id_uindex",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
//# sourceMappingURL=Feedbacks.js.map