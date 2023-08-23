import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type DegreeRequirementCreateInput = {
  bypasses: string;
  major: string;
  plan: PlanWhereUniqueInput;
};
