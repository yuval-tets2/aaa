import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { PlanListRelationFilter } from "../plan/PlanListRelationFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  plans?: PlanListRelationFilter;
  profile?: ProfileWhereUniqueInput;
  sessions?: SessionListRelationFilter;
};
