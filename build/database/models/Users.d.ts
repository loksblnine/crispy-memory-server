import { Model, Optional } from "sequelize";
export interface IUser {
    id?: number;
    role: number;
    email: string;
    password: string;
}
export declare type IUserInput = Optional<IUser, 'role' & 'email' & 'password'>;
export declare type IUserOutput = Required<IUser>;
export declare class User extends Model<IUser, IUserInput> implements IUser {
    id: number;
    role: number;
    email: string;
    password: string;
}
//# sourceMappingURL=Users.d.ts.map