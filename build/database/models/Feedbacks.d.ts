import { Model, Optional } from "sequelize";
export interface IFeedback {
    id?: number;
    user_id: number;
    mark: number;
    text: string;
    time: Date;
}
export declare type IFeedbackInput = Optional<IFeedback, 'role' & 'email' & 'password'>;
export declare type IFeedbackOutput = Required<IFeedback>;
export declare class Feedback extends Model<IFeedback, IFeedbackInput> implements IFeedback {
    id: number;
    user_id: number;
    mark: number;
    text: string;
    time: Date;
}
//# sourceMappingURL=Feedbacks.d.ts.map