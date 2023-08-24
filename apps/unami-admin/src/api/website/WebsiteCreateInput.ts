import { EventDatumCreateNestedManyWithoutWebsitesInput } from "./EventDatumCreateNestedManyWithoutWebsitesInput";
import { ReportCreateNestedManyWithoutWebsitesInput } from "./ReportCreateNestedManyWithoutWebsitesInput";
import { SessionDatumCreateNestedManyWithoutWebsitesInput } from "./SessionDatumCreateNestedManyWithoutWebsitesInput";
import { TeamWebsiteCreateNestedManyWithoutWebsitesInput } from "./TeamWebsiteCreateNestedManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteCreateInput = {
  deletedAt?: Date | null;
  domain?: string | null;
  eventData?: EventDatumCreateNestedManyWithoutWebsitesInput;
  name: string;
  report?: ReportCreateNestedManyWithoutWebsitesInput;
  resetAt?: Date | null;
  sessionData?: SessionDatumCreateNestedManyWithoutWebsitesInput;
  shareId?: string | null;
  teamWebsite?: TeamWebsiteCreateNestedManyWithoutWebsitesInput;
  user?: UserWhereUniqueInput | null;
};
