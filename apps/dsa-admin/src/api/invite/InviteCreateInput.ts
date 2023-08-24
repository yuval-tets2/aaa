import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type InviteCreateInput = {
  accepted: boolean;
  acceptor?: UserWhereUniqueInput | null;
  creator: UserWhereUniqueInput;
  email: string;
  expiresAt: Date;
  name?: string | null;
  role: "owner" | "admin" | "editor" | "developer" | "viewer";
  team: TeamWhereUniqueInput;
};
