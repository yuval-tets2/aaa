import { SortOrder } from "../../util/SortOrder";

export type DisplayOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  personId?: SortOrder;
  status?: SortOrder;
  surveyId?: SortOrder;
  updatedAt?: SortOrder;
};
