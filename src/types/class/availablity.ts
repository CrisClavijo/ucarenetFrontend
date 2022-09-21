import { userClass } from "./user";

export class availabilityClass  {
    id: string;
    dayOfWeek: number | null;
    fromHour: string;
    toHour: string;
    userID: string;
}