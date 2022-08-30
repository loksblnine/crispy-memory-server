"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    role: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: config_1.sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
        {
            name: "users_pk",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
        {
            name: "users_id_uindex",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
//# sourceMappingURL=Users.js.map