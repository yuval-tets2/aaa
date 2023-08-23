import { User } from "../user/User";

export type Profile = {
  endSemester?: "f" | "s" | "u";
  endYear: number;
  id: string;
  name: string;
  startSemester?: "f" | "s" | "u";
  startYear: number;
  user?: User;
};
