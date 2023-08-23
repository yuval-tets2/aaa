import { DegreeRequirement } from "../degreeRequirement/DegreeRequirement";
import { Semester } from "../semester/Semester";
import { User } from "../user/User";

export type Plan = {
  createdAt: Date;
  endSemester?: "f" | "s" | "u";
  endYear: number;
  id: string;
  name: string;
  requirements?: DegreeRequirement | null;
  semesters?: Array<Semester>;
  startSemester?: "f" | "s" | "u";
  startYear: number;
  transferCredits: string;
  updatedAt: Date;
  user?: User;
};
