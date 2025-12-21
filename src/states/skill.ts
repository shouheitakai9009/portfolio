import type { TechStack } from "./techStack";

// スキルデータの型
export interface Skill {
  id: string;
  name: TechStack;
  yearsOfExperience: number;
  comment: string;
}
