import { EventDatum as TEventDatum } from "../api/eventDatum/EventDatum";

export const EVENTDATUM_TITLE_FIELD = "eventKey";

export const EventDatumTitle = (record: TEventDatum): string => {
  return record.eventKey || String(record.id);
};
