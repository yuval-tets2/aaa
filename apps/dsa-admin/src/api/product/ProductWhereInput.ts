import { EnvironmentListRelationFilter } from "../environment/EnvironmentListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProductWhereInput = {
  environments?: EnvironmentListRelationFilter;
  team?: TeamWhereUniqueInput;
};
