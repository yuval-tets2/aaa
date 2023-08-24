import { SessionDatumUpdateManyWithoutSessionsInput } from "./SessionDatumUpdateManyWithoutSessionsInput";
import { WebsiteEventUpdateManyWithoutSessionsInput } from "./WebsiteEventUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  browser?: string | null;
  city?: string | null;
  country?: string | null;
  device?: string | null;
  hostname?: string | null;
  language?: string | null;
  os?: string | null;
  screen?: string | null;
  sessionData?: SessionDatumUpdateManyWithoutSessionsInput;
  subdivision1?: string | null;
  subdivision2?: string | null;
  websiteEvent?: WebsiteEventUpdateManyWithoutSessionsInput;
  websiteId?: string;
};
