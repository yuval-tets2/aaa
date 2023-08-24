import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type SessionDatumWhereInput = {
  session?: SessionWhereUniqueInput;
  website?: WebsiteWhereUniqueInput;
};
