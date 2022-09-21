import { User } from "../../response/user/userMainRes";
import { IUserData } from "../users/user";


export interface IAvailabilityReq  {
    id: string;
    dayOfWeek: number | null;
    fromHour: string;
    toHour: string;
    userID: string;
}