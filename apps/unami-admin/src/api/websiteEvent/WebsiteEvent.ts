import { EventDatum } from "../eventDatum/EventDatum";
import { Session } from "../session/Session";

export type WebsiteEvent = {
  createdAt: Date | null;
  eventData?: Array<EventDatum>;
  eventName: string | null;
  eventType: number;
  id: string;
  pageTitle: string | null;
  referrerDomain: string | null;
  referrerPath: string | null;
  referrerQuery: string | null;
  session?: Session;
  urlPath: string;
  urlQuery: string | null;
  websiteId: string;
};
