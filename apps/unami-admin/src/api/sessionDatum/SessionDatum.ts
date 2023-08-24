import { Session } from "../session/Session";
import { Website } from "../website/Website";

export type SessionDatum = {
  createdAt: Date | null;
  dataType: number;
  dateValue: Date | null;
  eventKey: string;
  id: string;
  numberValue: number | null;
  session?: Session;
  stringValue: string | null;
  website?: Website;
};
