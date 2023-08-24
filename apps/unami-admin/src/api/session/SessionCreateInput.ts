import { SessionDatumCreateNestedManyWithoutSessionsInput } from "./SessionDatumCreateNestedManyWithoutSessionsInput";
import { WebsiteEventCreateNestedManyWithoutSessionsInput } from "./WebsiteEventCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  browser?: string | null;
  city?: string | null;
  country?: string | null;
  device?: string | null;
  hostname?: string | null;
  language?: string | null;
  os?: string | null;
  screen?: string | null;
  sessionData?: SessionDatumCreateNestedManyWithoutSessionsInput;
  subdivision1?: string | null;
  subdivision2?: string | null;
  websiteEvent?: WebsiteEventCreateNestedManyWithoutSessionsInput;
  websiteId: string;
};
