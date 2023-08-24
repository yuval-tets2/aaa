import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  createdAt?: SortOrder;
  environmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  surveyIds?: SortOrder;
  triggers?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
