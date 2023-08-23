import { CourseCreateNestedManyWithoutSemestersInput } from "./CourseCreateNestedManyWithoutSemestersInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type SemesterCreateInput = {
  color: string;
  courses?: CourseCreateNestedManyWithoutSemestersInput;
  locked: boolean;
  plan: PlanWhereUniqueInput;
  semester: "f" | "s" | "u";
  year: number;
};
