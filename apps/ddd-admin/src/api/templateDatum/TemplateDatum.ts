import { TemplateItem } from "../templateItem/TemplateItem";
import { Template } from "../template/Template";

export type TemplateDatum = {
  id: string;
  items?: Array<TemplateItem>;
  semester: number;
  template?: Template;
};
