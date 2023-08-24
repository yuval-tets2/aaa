import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  autoClose?: SortOrder;
  autoComplete?: SortOrder;
  closeOnDate?: SortOrder;
  createdAt?: SortOrder;
  delay?: SortOrder;
  displayOption?: SortOrder;
  environmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  questions?: SortOrder;
  recontactDays?: SortOrder;
  redirectUrl?: SortOrder;
  status?: SortOrder;
  surveyClosedMessage?: SortOrder;
  thankYouCard?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
