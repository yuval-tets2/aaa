import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type DegreeRequirementUpdateInput = {
  bypasses?: string;
  major?: string;
  plan?: PlanWhereUniqueInput;
};
