import { EventDatum } from "../eventDatum/EventDatum";
import { Report } from "../report/Report";
import { SessionDatum } from "../sessionDatum/SessionDatum";
import { TeamWebsite } from "../teamWebsite/TeamWebsite";
import { User } from "../user/User";

export type Website = {
  createdAt: Date | null;
  deletedAt: Date | null;
  domain: string | null;
  eventData?: Array<EventDatum>;
  id: string;
  name: string;
  report?: Array<Report>;
  resetAt: Date | null;
  sessionData?: Array<SessionDatum>;
  shareId: string | null;
  teamWebsite?: Array<TeamWebsite>;
  updatedAt: Date | null;
  user?: User | null;
};
