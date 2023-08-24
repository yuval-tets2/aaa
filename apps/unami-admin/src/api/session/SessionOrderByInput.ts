import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  browser?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  device?: SortOrder;
  hostname?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  os?: SortOrder;
  screen?: SortOrder;
  subdivision1?: SortOrder;
  subdivision2?: SortOrder;
  websiteId?: SortOrder;
};
