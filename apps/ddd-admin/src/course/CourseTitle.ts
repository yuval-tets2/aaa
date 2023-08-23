import { Course as TCourse } from "../api/course/Course";

export const COURSE_TITLE_FIELD = "code";

export const CourseTitle = (record: TCourse): string => {
  return record.code || String(record.id);
};
