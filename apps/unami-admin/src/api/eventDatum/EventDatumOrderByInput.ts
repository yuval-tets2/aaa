import { SortOrder } from "../../util/SortOrder";

export type EventDatumOrderByInput = {
  createdAt?: SortOrder;
  dataType?: SortOrder;
  dateValue?: SortOrder;
  eventKey?: SortOrder;
  id?: SortOrder;
  numberValue?: SortOrder;
  stringValue?: SortOrder;
  websiteId?: SortOrder;
  websiteEventId?: SortOrder;
};
