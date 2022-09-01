import {Role} from "./Roles";
import {User} from "./Users";
import {Feedback} from "./Feedbacks";

User.hasOne(Role, {as: "roles", foreignKey: "id"});
Role.belongsTo(User, {as: "users", foreignKey: "role"});
User.hasMany(Feedback, {as: "feedbacks", foreignKey: "id"});
Feedback.belongsTo(User, {as: "users", foreignKey: "user_id"});

export {
  Role,
  User,
  Feedback
};