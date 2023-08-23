import { CourseUpdateManyWithoutSemestersInput } from "./CourseUpdateManyWithoutSemestersInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type SemesterUpdateInput = {
  color?: string;
  courses?: CourseUpdateManyWithoutSemestersInput;
  locked?: boolean;
  plan?: PlanWhereUniqueInput;
  semester?: "f" | "s" | "u";
  year?: number;
};
