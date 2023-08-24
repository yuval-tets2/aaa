import { ResponseNote as TResponseNote } from "../api/responseNote/ResponseNote";

export const RESPONSENOTE_TITLE_FIELD = "text";

export const ResponseNoteTitle = (record: TResponseNote): string => {
  return record.text || String(record.id);
};
