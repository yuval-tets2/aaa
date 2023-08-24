import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { TagsOnResponseListRelationFilter } from "../tagsOnResponse/TagsOnResponseListRelationFilter";

export type TagWhereInput = {
  environment?: EnvironmentWhereUniqueInput;
  responses?: TagsOnResponseListRelationFilter;
};
