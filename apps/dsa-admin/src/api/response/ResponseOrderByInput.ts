import { SortOrder } from "../../util/SortOrder";

export type ResponseOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  finished?: SortOrder;
  id?: SortOrder;
  meta?: SortOrder;
  personId?: SortOrder;
  personAttributes?: SortOrder;
  surveyId?: SortOrder;
  updatedAt?: SortOrder;
};
