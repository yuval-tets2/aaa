import { TemplateItem as TTemplateItem } from "../api/templateItem/TemplateItem";

export const TEMPLATEITEM_TITLE_FIELD = "name";

export const TemplateItemTitle = (record: TTemplateItem): string => {
  return record.name || String(record.id);
};
