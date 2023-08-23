import { Bypass as TBypass } from "../api/bypass/Bypass";

export const BYPASS_TITLE_FIELD = "courseCode";

export const BypassTitle = (record: TBypass): string => {
  return record.courseCode || String(record.id);
};
