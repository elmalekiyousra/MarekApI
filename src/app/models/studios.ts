import { User } from "./user";

export interface Studios {
    Id : Number;
    Name:string;
    Description : string;
    condition : string;
    Equipement : string;
    UserId: Number;
    Users : User;
    PriceHour : Number;
}
