import { EventClass as TEventClass } from "../api/eventClass/EventClass";

export const EVENTCLASS_TITLE_FIELD = "name";

export const EventClassTitle = (record: TEventClass): string => {
  return record.name || String(record.id);
};
