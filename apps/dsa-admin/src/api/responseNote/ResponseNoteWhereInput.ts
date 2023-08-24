import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseNoteWhereInput = {
  response?: ResponseWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
