import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  endSemester?: SortOrder;
  endYear?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startSemester?: SortOrder;
  startYear?: SortOrder;
  userId?: SortOrder;
};
