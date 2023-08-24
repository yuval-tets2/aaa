import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagsOnResponseWhereInput = {
  response?: ResponseWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
