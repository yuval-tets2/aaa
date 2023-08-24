import { SessionDatumListRelationFilter } from "../sessionDatum/SessionDatumListRelationFilter";
import { WebsiteEventListRelationFilter } from "../websiteEvent/WebsiteEventListRelationFilter";

export type SessionWhereInput = {
  sessionData?: SessionDatumListRelationFilter;
  websiteEvent?: WebsiteEventListRelationFilter;
};
