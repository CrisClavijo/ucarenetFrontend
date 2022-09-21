import { CaregiverSkills } from "./caregiverSkill";
import { userClass } from "./user";

export class caregiverClass {
    id: string;
    availabilityType: string;
    availabilityLocation: string;
    availabilityDistance: number | null;
    driversLicense: boolean | null;
    availableTransportation: string;
    vettingStatus: number | null;
    vettingAuthorization: boolean | null;
    desiredWage: number | null;
    yearsOfExperience: number | null;
    expFromDate: string | null;
    expToDate: string | null;
    description: string;
    ratePunct: number | null;
    rateDepen: number | null;
    rateTrans: number | null;
    rateHirea: number | null;
    rateItems: number | null;
    otherSkill: string;
    otherInterest: string;
    userID: string;
    user: userClass;
    skills: CaregiverSkills[];
    profileTitle: string;


}
