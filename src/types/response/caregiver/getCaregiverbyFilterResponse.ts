import { User } from "../user/userMainRes";
import { CaregiverSkills } from "../caregiverSkill/caregiverSkillRes";



export default interface ICaregiver {
    data : data

  }
  export interface data {

    success: boolean
    result: Result
    error: any
    unAuthorizedRequest: boolean
  }
  
  export interface Result {
    caregivers: Caregiver[]
    totalRecords: number
    resultsNo: number
  }
  
  export interface Caregiver {
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
    user: User;
    skills: CaregiverSkills[];
    profileTitle: string;
  }

