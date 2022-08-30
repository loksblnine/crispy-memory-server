import { Model, Optional } from "sequelize";
export interface IRole {
    id?: number;
    description: string;
}
export declare type IRoleInput = Optional<IRole, 'description'>;
export declare type IRoleOutput = Required<IRole>;
export declare class Role extends Model<IRole, IRoleInput> implements IRole {
    id: number;
    description: string;
}
//# sourceMappingURL=Roles.d.ts.map