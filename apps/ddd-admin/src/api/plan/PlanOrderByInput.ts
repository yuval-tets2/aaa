import { SortOrder } from "../../util/SortOrder";

export type PlanOrderByInput = {
  createdAt?: SortOrder;
  endSemester?: SortOrder;
  endYear?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  requirementsId?: SortOrder;
  startSemester?: SortOrder;
  startYear?: SortOrder;
  transferCredits?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
