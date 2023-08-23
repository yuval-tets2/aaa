import { TemplateDatum } from "../templateDatum/TemplateDatum";

export type TemplateItem = {
  id: string;
  name: string;
  templateData?: TemplateDatum;
  type?: "CORE" | "OPTIONAL";
};
