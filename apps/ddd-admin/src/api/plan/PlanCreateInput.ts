import { DegreeRequirementWhereUniqueInput } from "../degreeRequirement/DegreeRequirementWhereUniqueInput";
import { SemesterCreateNestedManyWithoutPlansInput } from "./SemesterCreateNestedManyWithoutPlansInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlanCreateInput = {
  endSemester: "f" | "s" | "u";
  endYear: number;
  name: string;
  requirements?: DegreeRequirementWhereUniqueInput | null;
  semesters?: SemesterCreateNestedManyWithoutPlansInput;
  startSemester: "f" | "s" | "u";
  startYear: number;
  transferCredits: string;
  user: UserWhereUniqueInput;
};
