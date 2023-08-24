import { SortOrder } from "../../util/SortOrder";

export type ApiKeyOrderByInput = {
  createdAt?: SortOrder;
  environmentId?: SortOrder;
  hashedKey?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  lastUsedAt?: SortOrder;
};
