import { EventClassWhereInput } from "./EventClassWhereInput";
import { EventClassOrderByInput } from "./EventClassOrderByInput";

export type EventClassFindManyArgs = {
  where?: EventClassWhereInput;
  orderBy?: Array<EventClassOrderByInput>;
  skip?: number;
  take?: number;
};
