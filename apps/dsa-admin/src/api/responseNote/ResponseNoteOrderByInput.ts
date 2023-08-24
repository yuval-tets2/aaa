import { SortOrder } from "../../util/SortOrder";

export type ResponseNoteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  responseId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
