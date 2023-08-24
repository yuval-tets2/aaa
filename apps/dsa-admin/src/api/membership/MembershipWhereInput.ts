import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipWhereInput = {
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
