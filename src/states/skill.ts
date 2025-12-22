import type { TechStack } from "./techStack";

// スキルデータの型
export interface Skill {
  id: number;
  name: TechStack;
  yearsOfExperience: number;
  comment: string;
}
