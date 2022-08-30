/**
 * Feedbacks.ts
 * */

import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "../config/config";

export interface IFeedback {
  id?: number,
  user_id: number,
  mark: number,
  text: string,
  time: Date
}

export type IFeedbackInput = Optional<IFeedback, 'role' & 'email' & 'password'>
export type IFeedbackOutput = Required<IFeedback>

export class Feedback extends Model<IFeedback, IFeedbackInput> implements IFeedback {
  public id!: number;
  public user_id!: number;
  public mark!: number;
  public text!: string;
  public time!: Date;
}

Feedback.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mark: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'feedbacks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "feedbacks_pk",
        unique: true,
        fields: [
          {name: "id"},
        ]
      },
      {
        name: "feedbacks_id_uindex",
        unique: true,
        fields: [
          {name: "id"},
        ]
      },
    ]
  });