import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { WebsiteEventWhereUniqueInput } from "../websiteEvent/WebsiteEventWhereUniqueInput";

export type EventDatumWhereInput = {
  website?: WebsiteWhereUniqueInput;
  websiteEvent?: WebsiteEventWhereUniqueInput;
};
