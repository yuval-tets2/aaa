import { EventDatumListRelationFilter } from "../eventDatum/EventDatumListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { SessionDatumListRelationFilter } from "../sessionDatum/SessionDatumListRelationFilter";
import { TeamWebsiteListRelationFilter } from "../teamWebsite/TeamWebsiteListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteWhereInput = {
  eventData?: EventDatumListRelationFilter;
  report?: ReportListRelationFilter;
  sessionData?: SessionDatumListRelationFilter;
  teamWebsite?: TeamWebsiteListRelationFilter;
  user?: UserWhereUniqueInput;
};
