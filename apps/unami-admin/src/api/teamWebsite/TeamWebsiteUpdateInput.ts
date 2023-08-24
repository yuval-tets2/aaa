import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type TeamWebsiteUpdateInput = {
  team?: TeamWhereUniqueInput;
  website?: WebsiteWhereUniqueInput;
};
