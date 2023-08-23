import { TemplateItemListRelationFilter } from "../templateItem/TemplateItemListRelationFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TemplateDatumWhereInput = {
  items?: TemplateItemListRelationFilter;
  template?: TemplateWhereUniqueInput;
};
