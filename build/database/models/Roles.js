"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
class Role extends sequelize_1.Model {
}
exports.Role = Role;
Role.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: config_1.sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false,
    indexes: [
        {
            name: "roles_pk",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
        {
            name: "roles_id_uindex",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
//# sourceMappingURL=Roles.js.map