import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseNoteCreateInput = {
  response: ResponseWhereUniqueInput;
  text: string;
  user: UserWhereUniqueInput;
};
