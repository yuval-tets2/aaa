import { EventClass } from "../eventClass/EventClass";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type Event = {
  createdAt: Date;
  eventClass?: EventClass | null;
  id: string;
  properties: JsonValue;
  session?: Session;
};
