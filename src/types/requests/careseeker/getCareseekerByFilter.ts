export default interface IGetCareseekerByFilter {
  filterCareseeker: FilterCareseeker
  offset: number
    pagesize: number
  }
  
  export interface FilterCareseeker {
    Id: string
    City: string
  }
  