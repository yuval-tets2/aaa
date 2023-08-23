import { Semester } from "../semester/Semester";

export type Course = {
  code: string;
  color: string;
  id: string;
  locked: boolean;
  prereqOverriden: boolean;
  semester?: Semester;
};
