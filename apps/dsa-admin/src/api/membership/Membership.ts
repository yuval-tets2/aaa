import { Team } from "../team/Team";
import { User } from "../user/User";

export type Membership = {
  accepted: boolean;
  id: string;
  role?: "owner" | "admin" | "editor" | "developer" | "viewer";
  team?: Team;
  user?: User;
};
