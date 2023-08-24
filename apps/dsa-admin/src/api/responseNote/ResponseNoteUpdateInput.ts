import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseNoteUpdateInput = {
  response?: ResponseWhereUniqueInput;
  text?: string;
  user?: UserWhereUniqueInput;
};
