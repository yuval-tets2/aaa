import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type SemesterWhereInput = {
  courses?: CourseListRelationFilter;
  plan?: PlanWhereUniqueInput;
};
