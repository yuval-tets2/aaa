import { User } from "../user/User";
import { Team } from "../team/Team";

export type Invite = {
  accepted: boolean;
  acceptor?: User | null;
  createdAt: Date;
  creator?: User;
  email: string;
  expiresAt: Date;
  id: string;
  name: string | null;
  role?: "owner" | "admin" | "editor" | "developer" | "viewer";
  team?: Team;
};
