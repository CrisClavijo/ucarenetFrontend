


export  interface ILanguageResponse {
    data : data

  }
  export interface data {

    success: boolean
    result: Result
    error: any
    unAuthorizedRequest: boolean
  } 

  export interface Result {

    languages:language[]
  } 


  export interface language{

    id: string;
    name: string;
  }