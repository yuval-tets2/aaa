import { EventDatumUpdateManyWithoutWebsitesInput } from "./EventDatumUpdateManyWithoutWebsitesInput";
import { ReportUpdateManyWithoutWebsitesInput } from "./ReportUpdateManyWithoutWebsitesInput";
import { SessionDatumUpdateManyWithoutWebsitesInput } from "./SessionDatumUpdateManyWithoutWebsitesInput";
import { TeamWebsiteUpdateManyWithoutWebsitesInput } from "./TeamWebsiteUpdateManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteUpdateInput = {
  deletedAt?: Date | null;
  domain?: string | null;
  eventData?: EventDatumUpdateManyWithoutWebsitesInput;
  name?: string;
  report?: ReportUpdateManyWithoutWebsitesInput;
  resetAt?: Date | null;
  sessionData?: SessionDatumUpdateManyWithoutWebsitesInput;
  shareId?: string | null;
  teamWebsite?: TeamWebsiteUpdateManyWithoutWebsitesInput;
  user?: UserWhereUniqueInput | null;
};
