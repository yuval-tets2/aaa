import { Website } from "../website/Website";
import { WebsiteEvent } from "../websiteEvent/WebsiteEvent";

export type EventDatum = {
  createdAt: Date | null;
  dataType: number;
  dateValue: Date | null;
  eventKey: string;
  id: string;
  numberValue: number | null;
  stringValue: string | null;
  website?: Website;
  websiteEvent?: WebsiteEvent;
};
