import { DisplayWhereInput } from "./DisplayWhereInput";
import { DisplayOrderByInput } from "./DisplayOrderByInput";

export type DisplayFindManyArgs = {
  where?: DisplayWhereInput;
  orderBy?: Array<DisplayOrderByInput>;
  skip?: number;
  take?: number;
};
