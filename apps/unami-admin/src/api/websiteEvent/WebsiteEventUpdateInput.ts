import { EventDatumUpdateManyWithoutWebsiteEventsInput } from "./EventDatumUpdateManyWithoutWebsiteEventsInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type WebsiteEventUpdateInput = {
  eventData?: EventDatumUpdateManyWithoutWebsiteEventsInput;
  eventName?: string | null;
  eventType?: number;
  pageTitle?: string | null;
  referrerDomain?: string | null;
  referrerPath?: string | null;
  referrerQuery?: string | null;
  session?: SessionWhereUniqueInput;
  urlPath?: string;
  urlQuery?: string | null;
  websiteId?: string;
};
