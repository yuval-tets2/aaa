import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { TagsOnResponseCreateNestedManyWithoutTagsInput } from "./TagsOnResponseCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  environment: EnvironmentWhereUniqueInput;
  name: string;
  responses?: TagsOnResponseCreateNestedManyWithoutTagsInput;
};
