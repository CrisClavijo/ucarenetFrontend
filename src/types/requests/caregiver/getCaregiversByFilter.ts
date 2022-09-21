export default interface IGetCaregiversByFilter {
    filterCaregiver: FilterCaregiver
    offset: number
    pagesize: number
  }
  
  export interface FilterCaregiver {
    Id: string
    City: string
  }
  