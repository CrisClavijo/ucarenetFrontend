import { User } from "../user/userMainRes";
import { CaregiverSkills } from "../caregiverSkill/caregiverSkillRes";



export default interface ICareseekerResponse {
    data : data

  }
  export interface data {

    success: boolean
    result: Result
    error: any
    unAuthorizedRequest: boolean
  }
  
  export interface Result {
    careseekers: Careseeker[]
    totalRecords: number
    resultsNo: number
  }
  
  export interface Careseeker {
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
      user: User;
  }
 
