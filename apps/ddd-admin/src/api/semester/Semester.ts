import { Course } from "../course/Course";
import { Plan } from "../plan/Plan";

export type Semester = {
  color: string;
  courses?: Array<Course>;
  id: string;
  locked: boolean;
  plan?: Plan;
  semester?: "f" | "s" | "u";
  year: number;
};
