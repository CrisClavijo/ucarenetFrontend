import http from "../http-common";
import { IAvailabilityReq } from "../types/requests/availablity/availablity";
import { ResponseGen } from "../types/response/genericResponse/response";


const insertCaregiverAvailablity = (data: IAvailabilityReq) => {
  return http.post<IAvailabilityReq,any>("/availability/insertAvailability", data);
};


const AvailablityService = {

  insertCaregiverAvailablity
  // remove,
  // removeAll,
  // findByTitle,
};
export default AvailablityService;