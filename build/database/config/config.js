"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const dbDatabase = String(process.env.DB_DATABASE);
const dbPassword = String(process.env.DB_PASSWORD);
const dbUser = String(process.env.DB_USER);
const dbHost = String(process.env.DB_HOST);
const dialectOptions = process.env.NODE_ENV === "development" ? {} : {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
};
exports.sequelize = new sequelize_1.Sequelize(dbDatabase, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    dialectOptions
});
//# sourceMappingURL=config.js.map