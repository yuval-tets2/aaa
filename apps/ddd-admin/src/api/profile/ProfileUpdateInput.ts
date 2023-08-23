import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  endSemester?: "f" | "s" | "u";
  endYear?: number;
  name?: string;
  startSemester?: "f" | "s" | "u";
  startYear?: number;
  user?: UserWhereUniqueInput;
};
