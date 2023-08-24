import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  plan?: SortOrder;
  stripeCustomerId?: SortOrder;
  updatedAt?: SortOrder;
};
