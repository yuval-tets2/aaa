import { TemplateDatum as TTemplateDatum } from "../api/templateDatum/TemplateDatum";

export const TEMPLATEDATUM_TITLE_FIELD = "id";

export const TemplateDatumTitle = (record: TTemplateDatum): string => {
  return record.id || String(record.id);
};
