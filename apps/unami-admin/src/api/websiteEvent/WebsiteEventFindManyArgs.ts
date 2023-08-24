import { WebsiteEventWhereInput } from "./WebsiteEventWhereInput";
import { WebsiteEventOrderByInput } from "./WebsiteEventOrderByInput";

export type WebsiteEventFindManyArgs = {
  where?: WebsiteEventWhereInput;
  orderBy?: Array<WebsiteEventOrderByInput>;
  skip?: number;
  take?: number;
};
