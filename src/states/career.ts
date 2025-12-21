import type { Role } from "./role";
import type { TechStack } from "./techStack";

// 経歴データの型
export interface Career {
  id: string;
  projectName: string;
  from: string;
  to: string | "現在";
  overview: string;
  role: Role;
  teamSize: number;
  techStack: TechStack[];
  description: string;
}
