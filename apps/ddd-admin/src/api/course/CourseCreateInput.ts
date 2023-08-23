import { SemesterWhereUniqueInput } from "../semester/SemesterWhereUniqueInput";

export type CourseCreateInput = {
  code: string;
  color: string;
  locked: boolean;
  prereqOverriden: boolean;
  semester: SemesterWhereUniqueInput;
};
