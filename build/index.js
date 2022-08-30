"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const config_1 = require("./database/config/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json({ limit: '7mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.static("static"));
app.use("/", index_1.default);
try {
    config_1.sequelize.authenticate()
        .then(() => {
        console.log('[index.ts] Connection has been established successfully.');
    });
}
catch (error) {
    console.log('[index.ts] Unable to connect to the database:', error);
}
app.listen(process.env.PORT, () => {
    console.log(`[index.ts] server listening on port: ${process.env.PORT} and env: ${process.env.NODE_ENV}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map