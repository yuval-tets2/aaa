import { TemplateDatumWhereUniqueInput } from "../templateDatum/TemplateDatumWhereUniqueInput";

export type TemplateItemCreateInput = {
  name: string;
  templateData: TemplateDatumWhereUniqueInput;
  type: "CORE" | "OPTIONAL";
};
