import { BypassWhereInput } from "./BypassWhereInput";
import { BypassOrderByInput } from "./BypassOrderByInput";

export type BypassFindManyArgs = {
  where?: BypassWhereInput;
  orderBy?: Array<BypassOrderByInput>;
  skip?: number;
  take?: number;
};
