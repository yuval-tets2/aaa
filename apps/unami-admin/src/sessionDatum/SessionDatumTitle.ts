import { SessionDatum as TSessionDatum } from "../api/sessionDatum/SessionDatum";

export const SESSIONDATUM_TITLE_FIELD = "eventKey";

export const SessionDatumTitle = (record: TSessionDatum): string => {
  return record.eventKey || String(record.id);
};
