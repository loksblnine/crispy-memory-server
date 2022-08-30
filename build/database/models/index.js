"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = exports.User = exports.Role = void 0;
const Roles_1 = require("./Roles");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Roles_1.Role; } });
const Users_1 = require("./Users");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return Users_1.User; } });
const Feedbacks_1 = require("./Feedbacks");
Object.defineProperty(exports, "Feedback", { enumerable: true, get: function () { return Feedbacks_1.Feedback; } });
Users_1.User.hasOne(Roles_1.Role);
Roles_1.Role.belongsTo(Users_1.User);
Users_1.User.hasMany(Feedbacks_1.Feedback);
Feedbacks_1.Feedback.belongsTo(Users_1.User);
//# sourceMappingURL=index.js.map