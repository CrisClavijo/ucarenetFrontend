import http from "../http-common";
import http2 from "../http-common-img";
import IUserData from "../types/requests/users/user";
import IUserResultsList from "../types/response/user/user";
import IUserExtraFieldRequest from "../types/requests/users/userExtraFields";
import IUserExtraResponseData from "../types/response/user/userExtraResponse";
import { ICaregiverLanguageInsertreq } from "../types/requests/caregiver/caregiverLanguageReq";
import { IUserProfilePicReq } from "../types/requests/users/userProfilePic";

const create = (data: IUserData) => {
  return http.post<IUserData,IUserResultsList>("caregiver/InsertCaregiver ", data);
};
const insertExtraRecUser = (data: IUserExtraFieldRequest) => {
    return http.post<IUserExtraFieldRequest,IUserExtraResponseData>("user/InsertUserExtraFields", data);
  };
  const insertUserLanguages = (data: ICaregiverLanguageInsertreq) => {
    return http.post<ICaregiverLanguageInsertreq,IUserExtraResponseData>("userLanguage/InsertUserLanguage", data);
  };

  const uploadImage = (data: IUserProfilePicReq) => {
    return http2.post<IUserProfilePicReq,any>("/home/saveProfileImage", data);
  };
const userCaregiverServices = {

  create,
  insertExtraRecUser,
  insertUserLanguages,
  uploadImage
 
};
export default userCaregiverServices;