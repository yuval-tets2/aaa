import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type SessionDatumCreateInput = {
  dataType: number;
  dateValue?: Date | null;
  eventKey: string;
  numberValue?: number | null;
  session: SessionWhereUniqueInput;
  stringValue?: string | null;
  website: WebsiteWhereUniqueInput;
};
