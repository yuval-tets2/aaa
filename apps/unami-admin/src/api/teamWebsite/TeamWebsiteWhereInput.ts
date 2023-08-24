import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type TeamWebsiteWhereInput = {
  team?: TeamWhereUniqueInput;
  website?: WebsiteWhereUniqueInput;
};
