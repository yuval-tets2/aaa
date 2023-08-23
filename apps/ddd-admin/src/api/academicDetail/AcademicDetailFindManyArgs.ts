import { AcademicDetailWhereInput } from "./AcademicDetailWhereInput";
import { AcademicDetailOrderByInput } from "./AcademicDetailOrderByInput";

export type AcademicDetailFindManyArgs = {
  where?: AcademicDetailWhereInput;
  orderBy?: Array<AcademicDetailOrderByInput>;
  skip?: number;
  take?: number;
};
