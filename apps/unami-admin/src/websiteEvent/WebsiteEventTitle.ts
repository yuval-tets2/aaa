import { WebsiteEvent as TWebsiteEvent } from "../api/websiteEvent/WebsiteEvent";

export const WEBSITEEVENT_TITLE_FIELD = "eventName";

export const WebsiteEventTitle = (record: TWebsiteEvent): string => {
  return record.eventName || String(record.id);
};
