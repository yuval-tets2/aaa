import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamUserUpdateInput = {
  role?: string;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
