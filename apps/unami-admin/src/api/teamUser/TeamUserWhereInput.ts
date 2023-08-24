import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamUserWhereInput = {
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
