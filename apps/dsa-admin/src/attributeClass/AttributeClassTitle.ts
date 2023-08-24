import { AttributeClass as TAttributeClass } from "../api/attributeClass/AttributeClass";

export const ATTRIBUTECLASS_TITLE_FIELD = "name";

export const AttributeClassTitle = (record: TAttributeClass): string => {
  return record.name || String(record.id);
};
