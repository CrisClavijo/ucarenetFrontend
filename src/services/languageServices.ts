import ILanguageReq from "../types/requests/language/languageReq";
import http from "../http-common";
import { ILanguageResponse } from "../types/response/language/languageRes";

const getAll = (data: ILanguageReq) => {
    return http.post<ILanguageReq,ILanguageResponse>("/Language/GetAll", data);
  };

  const LanguageServices = {
    getAll,
   
  };
  export default LanguageServices;