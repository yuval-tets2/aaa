import { SemesterWhereUniqueInput } from "../semester/SemesterWhereUniqueInput";

export type CourseUpdateInput = {
  code?: string;
  color?: string;
  locked?: boolean;
  prereqOverriden?: boolean;
  semester?: SemesterWhereUniqueInput;
};
