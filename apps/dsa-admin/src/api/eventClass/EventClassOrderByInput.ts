import { SortOrder } from "../../util/SortOrder";

export type EventClassOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  environmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  noCodeConfig?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
