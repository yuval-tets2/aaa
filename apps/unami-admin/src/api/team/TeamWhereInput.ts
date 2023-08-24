import { TeamUserListRelationFilter } from "../teamUser/TeamUserListRelationFilter";
import { TeamWebsiteListRelationFilter } from "../teamWebsite/TeamWebsiteListRelationFilter";

export type TeamWhereInput = {
  teamUser?: TeamUserListRelationFilter;
  teamWebsite?: TeamWebsiteListRelationFilter;
};
