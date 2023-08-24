import { Attribute as TAttribute } from "../api/attribute/Attribute";

export const ATTRIBUTE_TITLE_FIELD = "value";

export const AttributeTitle = (record: TAttribute): string => {
  return record.value || String(record.id);
};
