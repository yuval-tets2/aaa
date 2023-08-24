import { SortOrder } from "../../util/SortOrder";

export type WebsiteOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  domain?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  resetAt?: SortOrder;
  shareId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
