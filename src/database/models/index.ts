import {Role} from "./Roles";
import {User} from "./Users";
import {Feedback} from "./Feedbacks";

User.hasOne(Role);
Role.belongsTo(User);
User.hasMany(Feedback);
Feedback.belongsTo(User);

export {
  Role,
  User,
  Feedback
};