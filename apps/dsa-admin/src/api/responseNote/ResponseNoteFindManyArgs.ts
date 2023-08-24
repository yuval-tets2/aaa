import { ResponseNoteWhereInput } from "./ResponseNoteWhereInput";
import { ResponseNoteOrderByInput } from "./ResponseNoteOrderByInput";

export type ResponseNoteFindManyArgs = {
  where?: ResponseNoteWhereInput;
  orderBy?: Array<ResponseNoteOrderByInput>;
  skip?: number;
  take?: number;
};
