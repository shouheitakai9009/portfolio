import careers from "../data/careers.json" assert { type: "json" };
import skills from "../data/skills.json" assert { type: "json" };
import type { Career } from "./career";
import type { Skill } from "./skill";

export type State = {
  selctedCareerId: number | null;
  careers: Career[];
  skills: Skill[];
};

export const initialState: State = {
  selctedCareerId: null,
  careers: careers as Career[],
  skills: skills as Skill[],
};
