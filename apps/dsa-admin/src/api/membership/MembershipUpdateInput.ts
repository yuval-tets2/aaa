import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipUpdateInput = {
  accepted?: boolean;
  role?: "owner" | "admin" | "editor" | "developer" | "viewer";
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
