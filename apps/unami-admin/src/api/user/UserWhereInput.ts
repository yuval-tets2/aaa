import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { TeamUserListRelationFilter } from "../teamUser/TeamUserListRelationFilter";
import { WebsiteListRelationFilter } from "../website/WebsiteListRelationFilter";

export type UserWhereInput = {
  report?: ReportListRelationFilter;
  teamUser?: TeamUserListRelationFilter;
  website?: WebsiteListRelationFilter;
};
