import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type ReportUpdateInput = {
  description?: string;
  name?: string;
  parameters?: string;
  typeField?: string;
  user?: UserWhereUniqueInput;
  website?: WebsiteWhereUniqueInput;
};
