import { DegreeRequirementWhereUniqueInput } from "../degreeRequirement/DegreeRequirementWhereUniqueInput";
import { SemesterUpdateManyWithoutPlansInput } from "./SemesterUpdateManyWithoutPlansInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlanUpdateInput = {
  endSemester?: "f" | "s" | "u";
  endYear?: number;
  name?: string;
  requirements?: DegreeRequirementWhereUniqueInput | null;
  semesters?: SemesterUpdateManyWithoutPlansInput;
  startSemester?: "f" | "s" | "u";
  startYear?: number;
  transferCredits?: string;
  user?: UserWhereUniqueInput;
};
