import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamUserCreateInput = {
  role: string;
  team: TeamWhereUniqueInput;
  user: UserWhereUniqueInput;
};
