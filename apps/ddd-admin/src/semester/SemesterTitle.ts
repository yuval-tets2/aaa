import { Semester as TSemester } from "../api/semester/Semester";

export const SEMESTER_TITLE_FIELD = "color";

export const SemesterTitle = (record: TSemester): string => {
  return record.color || String(record.id);
};
