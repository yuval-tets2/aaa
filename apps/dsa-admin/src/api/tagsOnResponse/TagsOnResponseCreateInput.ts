import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagsOnResponseCreateInput = {
  response: ResponseWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
