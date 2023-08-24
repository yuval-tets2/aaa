import { Team } from "../team/Team";
import { User } from "../user/User";

export type TeamUser = {
  createdAt: Date | null;
  id: string;
  role: string;
  team?: Team;
  updatedAt: Date | null;
  user?: User;
};
