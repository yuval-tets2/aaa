import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type ReportWhereInput = {
  user?: UserWhereUniqueInput;
  website?: WebsiteWhereUniqueInput;
};
