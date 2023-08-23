import { SortOrder } from "../../util/SortOrder";

export type SemesterOrderByInput = {
  color?: SortOrder;
  id?: SortOrder;
  locked?: SortOrder;
  planId?: SortOrder;
  semester?: SortOrder;
  year?: SortOrder;
};
