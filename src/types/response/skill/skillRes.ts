

export  interface ISkillRes {
    data : data

  }
  export interface data {

    success: boolean
    result: Result
    error: any
    unAuthorizedRequest: boolean
  } 

  export interface Result {

    skills:Skill[]
  } 


  export interface Skill{

    id: string;
    name: string;
    sortOrder: number;
    category: number;
  }