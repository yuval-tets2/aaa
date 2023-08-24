import { EventDatumListRelationFilter } from "../eventDatum/EventDatumListRelationFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type WebsiteEventWhereInput = {
  eventData?: EventDatumListRelationFilter;
  session?: SessionWhereUniqueInput;
};
