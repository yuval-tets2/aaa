import { Survey as TSurvey } from "../api/survey/Survey";

export const SURVEY_TITLE_FIELD = "name";

export const SurveyTitle = (record: TSurvey): string => {
  return record.name || String(record.id);
};
