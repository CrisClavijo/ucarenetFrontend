import { Skill } from "../skill/skillRes";

export interface CaregiverSkills {
    id: string;
    caregiverID: string | null;
    skillID: string | null;
    skill: Skill;
}