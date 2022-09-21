export default   interface IUserResultsList 

{
    data: Data;

}

export interface Data {
    success: boolean
    result: Result
    error: any
    unAuthorizedRequest: boolean
  }
  
  export interface Result {
    id: string
    id2: string
    city: any
    message: string
  }