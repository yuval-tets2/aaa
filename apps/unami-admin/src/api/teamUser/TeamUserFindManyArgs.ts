import { TeamUserWhereInput } from "./TeamUserWhereInput";
import { TeamUserOrderByInput } from "./TeamUserOrderByInput";

export type TeamUserFindManyArgs = {
  where?: TeamUserWhereInput;
  orderBy?: Array<TeamUserOrderByInput>;
  skip?: number;
  take?: number;
};
