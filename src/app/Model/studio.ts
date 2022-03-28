import { User } from "./user";

export interface Studio {
  Id: Number,
  Name: string,
  Description: string,
  Conditions: string,
  Equipment: string,
  PriceHour: Number,
  UserId: Number,
  User : User,
}
