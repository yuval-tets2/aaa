import { EventDatumWhereInput } from "./EventDatumWhereInput";
import { EventDatumOrderByInput } from "./EventDatumOrderByInput";

export type EventDatumFindManyArgs = {
  where?: EventDatumWhereInput;
  orderBy?: Array<EventDatumOrderByInput>;
  skip?: number;
  take?: number;
};
