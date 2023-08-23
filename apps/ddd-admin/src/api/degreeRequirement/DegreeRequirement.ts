import { Plan } from "../plan/Plan";

export type DegreeRequirement = {
  bypasses: string;
  id: string;
  major: string;
  plan?: Plan;
};
