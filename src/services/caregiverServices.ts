import http from "../http-common";
import ICaregiverData from "../types/requests/caregiver/caregiver";
import { ICaregiverSkillsInsertReq } from "../types/requests/caregiver/caregiverSkill";
import IGetCaregiversByFilter from "../types/requests/caregiver/getCaregiversByFilter";
import ICaregiverResultsList from "../types/response/caregiver/caregiverResultsList";
import  ICaregiver  from "../types/response/caregiver/getCaregiverbyFilterResponse";
import  {Caregiver}  from "../types/response/caregiver/getCaregiverbyFilterResponse";
import { ResponseGen } from "../types/response/genericResponse/response";
// const getAll = () => {
//   return http.get<Array<ICaregiverData>>("/caregiver");
// };
// const get = (id: any) => {
//   return http.get<ICaregiverData>(`/caregiver/${id}`);
// };
const create = (data: ICaregiverData) => {
  return http.post<ICaregiverData,Array<ICaregiverResultsList>>("/caregiver/GetCaregiversByFilterFast", data);
};
// const GetCaregiver = (data: ICaregiverData) => {
//   return http.post<ICaregiverData,Array<ICaregiverResultsList>>("/caregiver/GetCaregiversByFilterFast", data);
// };
const getCaregiversByFilter = (data: IGetCaregiversByFilter) => {
  return http.post<IGetCaregiversByFilter,ICaregiver>("/caregiver/GetCaregiversByFilter", data);
};
const updateCaregiver= (data: Caregiver) => {
  return http.post<Caregiver,ResponseGen>("/caregiver/UpdateCaregiver ", data);
};
const insertCaregiverSkills = (data: ICaregiverSkillsInsertReq) => {
  return http.post<ICaregiverSkillsInsertReq,ResponseGen>("/caregiverskills/InsertCaregiverSkills", data);
};


// const remove = (id: any) => {
//   return http.delete<any>(`/caregiver/${id}`);
// };
// const removeAll = () => {
//   return http.delete<any>(`/caregiver`);
// };
// const findByTitle = (title: string) => {
//   return http.get<Array<ICaregiverData>>(`/caregiver?title=${title}`);
// };
const CaregiverService = {
  getCaregiversByFilter,
  create,
  updateCaregiver,
  insertCaregiverSkills
  // remove,
  // removeAll,
  // findByTitle,
};
export default CaregiverService;