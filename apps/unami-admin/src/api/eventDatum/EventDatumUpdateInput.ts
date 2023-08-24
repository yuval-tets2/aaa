import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { WebsiteEventWhereUniqueInput } from "../websiteEvent/WebsiteEventWhereUniqueInput";

export type EventDatumUpdateInput = {
  dataType?: number;
  dateValue?: Date | null;
  eventKey?: string;
  numberValue?: number | null;
  stringValue?: string | null;
  website?: WebsiteWhereUniqueInput;
  websiteEvent?: WebsiteEventWhereUniqueInput;
};
