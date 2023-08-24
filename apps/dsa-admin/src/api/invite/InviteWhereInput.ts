import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type InviteWhereInput = {
  acceptor?: UserWhereUniqueInput;
  creator?: UserWhereUniqueInput;
  team?: TeamWhereUniqueInput;
};
