import { SemesterWhereInput } from "./SemesterWhereInput";
import { SemesterOrderByInput } from "./SemesterOrderByInput";

export type SemesterFindManyArgs = {
  where?: SemesterWhereInput;
  orderBy?: Array<SemesterOrderByInput>;
  skip?: number;
  take?: number;
};
