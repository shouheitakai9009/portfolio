import careers from "../data/careers.json" assert { type: "json" };
import skills from "../data/skills.json" assert { type: "json" };
import type { Career } from "./career";
import type { Skill } from "./skill";

export type State = {
  careers: Career[];
  skills: Skill[];
};

export const initialState: State = {
  careers: careers as Career[],
  skills: skills as Skill[],
};
