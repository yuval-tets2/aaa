import { SortOrder } from "../../util/SortOrder";

export type WebsiteEventOrderByInput = {
  createdAt?: SortOrder;
  eventName?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  pageTitle?: SortOrder;
  referrerDomain?: SortOrder;
  referrerPath?: SortOrder;
  referrerQuery?: SortOrder;
  sessionId?: SortOrder;
  urlPath?: SortOrder;
  urlQuery?: SortOrder;
  websiteId?: SortOrder;
};
