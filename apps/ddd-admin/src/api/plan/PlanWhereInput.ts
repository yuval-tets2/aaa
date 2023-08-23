import { DegreeRequirementWhereUniqueInput } from "../degreeRequirement/DegreeRequirementWhereUniqueInput";
import { SemesterListRelationFilter } from "../semester/SemesterListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlanWhereInput = {
  requirements?: DegreeRequirementWhereUniqueInput;
  semesters?: SemesterListRelationFilter;
  user?: UserWhereUniqueInput;
};
