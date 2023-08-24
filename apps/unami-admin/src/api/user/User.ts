import { Report } from "../report/Report";
import { TeamUser } from "../teamUser/TeamUser";
import { Website } from "../website/Website";

export type User = {
  createdAt: Date | null;
  deletedAt: Date | null;
  id: string;
  report?: Array<Report>;
  role: string;
  teamUser?: Array<TeamUser>;
  updatedAt: Date | null;
  website?: Array<Website>;
};
