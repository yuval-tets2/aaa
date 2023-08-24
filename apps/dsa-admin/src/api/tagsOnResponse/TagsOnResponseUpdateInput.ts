import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagsOnResponseUpdateInput = {
  response?: ResponseWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
