import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  createdAt?: SortOrder;
  environmentId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
