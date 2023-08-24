import { SessionDatum } from "../sessionDatum/SessionDatum";
import { WebsiteEvent } from "../websiteEvent/WebsiteEvent";

export type Session = {
  browser: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date | null;
  device: string | null;
  hostname: string | null;
  id: string;
  language: string | null;
  os: string | null;
  screen: string | null;
  sessionData?: Array<SessionDatum>;
  subdivision1: string | null;
  subdivision2: string | null;
  websiteEvent?: Array<WebsiteEvent>;
  websiteId: string;
};
