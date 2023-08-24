import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { TagsOnResponseUpdateManyWithoutTagsInput } from "./TagsOnResponseUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  environment?: EnvironmentWhereUniqueInput;
  name?: string;
  responses?: TagsOnResponseUpdateManyWithoutTagsInput;
};
