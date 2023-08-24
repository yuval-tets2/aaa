import { Display as TDisplay } from "../api/display/Display";

export const DISPLAY_TITLE_FIELD = "id";

export const DisplayTitle = (record: TDisplay): string => {
  return record.id || String(record.id);
};
