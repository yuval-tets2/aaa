import { SurveyAttributeFilter as TSurveyAttributeFilter } from "../api/surveyAttributeFilter/SurveyAttributeFilter";

export const SURVEYATTRIBUTEFILTER_TITLE_FIELD = "value";

export const SurveyAttributeFilterTitle = (
  record: TSurveyAttributeFilter
): string => {
  return record.value || String(record.id);
};
