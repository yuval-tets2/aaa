import { SortOrder } from "../../util/SortOrder";

export type SessionDatumOrderByInput = {
  createdAt?: SortOrder;
  dataType?: SortOrder;
  dateValue?: SortOrder;
  eventKey?: SortOrder;
  id?: SortOrder;
  numberValue?: SortOrder;
  sessionId?: SortOrder;
  stringValue?: SortOrder;
  websiteId?: SortOrder;
};
