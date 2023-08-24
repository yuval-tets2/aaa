import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type TeamWebsiteCreateInput = {
  team: TeamWhereUniqueInput;
  website: WebsiteWhereUniqueInput;
};
