import { AcademicDetail as TAcademicDetail } from "../api/academicDetail/AcademicDetail";

export const ACADEMICDETAIL_TITLE_FIELD = "id";

export const AcademicDetailTitle = (record: TAcademicDetail): string => {
  return record.id || String(record.id);
};
