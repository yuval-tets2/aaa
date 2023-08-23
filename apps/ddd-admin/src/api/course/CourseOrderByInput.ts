import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  code?: SortOrder;
  color?: SortOrder;
  id?: SortOrder;
  locked?: SortOrder;
  prereqOverriden?: SortOrder;
  semesterId?: SortOrder;
};
