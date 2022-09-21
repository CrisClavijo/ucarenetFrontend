import http from "../http-common";
import { ISkillReq } from "../types/requests/skills/skillsReq";
import { ISkillRes } from "../types/response/skill/skillRes";

const getAll = (data: ISkillReq) => {
    return http.post<ISkillReq,ISkillRes>("/Skill/GetAll", data);
  };



  const SkillServices = {
    getAll,
  };
  export default SkillServices;