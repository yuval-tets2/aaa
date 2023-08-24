import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  eventClassId?: SortOrder;
  id?: SortOrder;
  properties?: SortOrder;
  sessionId?: SortOrder;
};
