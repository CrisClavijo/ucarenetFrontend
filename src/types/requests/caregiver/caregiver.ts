export  interface ICaregiverData {
 
    City: string;
    skills: any[];
    languages: any[];
    interests: any[];
    sortBy: string;



  }
  export  default interface RootObject {
    filterCaregiver: ICaregiverData;
    offset: number;
    pagesize: number;
}