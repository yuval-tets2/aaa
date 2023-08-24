import { SurveyTrigger as TSurveyTrigger } from "../api/surveyTrigger/SurveyTrigger";

export const SURVEYTRIGGER_TITLE_FIELD = "id";

export const SurveyTriggerTitle = (record: TSurveyTrigger): string => {
  return record.id || String(record.id);
};
