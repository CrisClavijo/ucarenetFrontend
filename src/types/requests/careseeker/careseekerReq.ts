import { userClass } from "../../class/user";

export interface ICareseekerReq  {
    id: string;
    nextOfKin: string;
    specialRequirements: string;
    physicalCondition: string;
    availabilityNeeded: number | null;
    urgency: string | null;
    careForMe: string;
    transportation: string;
    rateFrom: number;
    rateTo: number;
    firstTime: string;
    contactMethod: string;
    contactTime: string;
    postingTitle: string;
    postingDescription: string;
    postingActive: boolean | null;
    jobHired: string;
    jobClosed: string;
    jobHiredDate: string | null;
    jobClosedDate: string | null;
    otherSkill: string;
    otherInterest: string;
    userID: string;
    user: userClass;
}