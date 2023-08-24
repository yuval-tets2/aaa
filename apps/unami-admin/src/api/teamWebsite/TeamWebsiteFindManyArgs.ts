import { TeamWebsiteWhereInput } from "./TeamWebsiteWhereInput";
import { TeamWebsiteOrderByInput } from "./TeamWebsiteOrderByInput";

export type TeamWebsiteFindManyArgs = {
  where?: TeamWebsiteWhereInput;
  orderBy?: Array<TeamWebsiteOrderByInput>;
  skip?: number;
  take?: number;
};
