import { TemplateDatum } from "../templateDatum/TemplateDatum";

export type Template = {
  id: string;
  name: string | null;
  templateData?: Array<TemplateDatum>;
};
