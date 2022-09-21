import http from "../http-common";
import { SeniorClass } from "../types/class/senior/senior";
import { SeniorLanguageClass } from "../types/class/senior/seniorLanguages";
import { SeniorSkillsClass } from "../types/class/senior/seniorSkills";
import ICaregiverData from "../types/requests/caregiver/caregiver";
import { ICaregiverSkillsInsertReq } from "../types/requests/caregiver/caregiverSkill";
import IGetCaregiversByFilter from "../types/requests/caregiver/getCaregiversByFilter";
import { ICareseekerReq } from "../types/requests/careseeker/careseekerReq";
import IGetCareseekerByFilter from "../types/requests/careseeker/getCareseekerByFilter";
import  ISeniorInterestReq  from "../types/requests/interest/insertSeniorInterest";
import IinterestReq  from "../types/requests/interest/interestReq";
import ICaregiverResultsList from "../types/response/caregiver/caregiverResultsList";
import  ICaregiver  from "../types/response/caregiver/getCaregiverbyFilterResponse";
import  {Caregiver}  from "../types/response/caregiver/getCaregiverbyFilterResponse";
import ICareseekerResponse from "../types/response/careseeker/getCareseekerbyFilterResponse";
import { ResponseGen } from "../types/response/genericResponse/response";
// const getAll = () => {
//   return http.get<Array<ICaregiverData>>("/caregiver");
// };
// const get = (id: any) => {
//   return http.get<ICaregiverData>(`/caregiver/${id}`);
// };
const getSeniorByCareseeker = (data: ICaregiverData) => {
  return http.post<ICaregiverData,Array<ICaregiverResultsList>>("/caregiver/GetCaregiversByFilterFast", data);
};
// const GetCaregiver = (data: ICaregiverData) => {
//   return http.post<ICaregiverData,Array<ICaregiverResultsList>>("/caregiver/GetCaregiversByFilterFast", data);
// };
const getCareseekerByFilter = (data: IGetCareseekerByFilter) => {
  return http.post<IGetCareseekerByFilter,ICareseekerResponse>("/Careseeker/GetCareseekersByFilter", data);
};
const updateCareseeker= (data: ICareseekerReq) => {
  return http.post<ICareseekerReq,ResponseGen>("/Careseeker/UpdateCareseeker", data);
};
const insertSenior= (data: SeniorClass) => {
    return http.post<SeniorClass,any>("/senior/insertSenior ", data);
  };
  const updateSenior= (data: SeniorClass) => {
    return http.post<SeniorClass,any>("/senior/UpdateSenior ", data);
  };
  const insertSeniorlang= (data: SeniorLanguageClass) => {
    return http.post<SeniorLanguageClass,any>("/seniorlanguage/insertSeniorLanguage ", data);
  };
  const insertSeniorSkills= (data: SeniorSkillsClass) => {
    return http.post<SeniorSkillsClass,any>("/SeniorSkills/InsertSeniorSkills ", data);
  };
  const insertSeniorInterest= (data: ISeniorInterestReq) => {
    return http.post<ISeniorInterestReq,any>("/seniorinterest/insertSeniorInterest ", data);
  };
  const getAllInterest= (data: IinterestReq) => {
    return http.post<IinterestReq,any>("/Interest/GetAll ", data);
  };
  

const insertCareseekerSkills = (data: ICaregiverSkillsInsertReq) => {
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
const CareseekerService = {
  getCareseekerByFilter,
  getSeniorByCareseeker,
  updateCareseeker,
  insertCareseekerSkills,
  insertSenior,
  updateSenior,
  insertSeniorlang,
  insertSeniorSkills,
  getAllInterest,
  insertSeniorInterest,
  // remove,
  // removeAll,
  // findByTitle,
};
export default CareseekerService;