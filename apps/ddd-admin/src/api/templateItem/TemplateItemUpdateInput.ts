import { TemplateDatumWhereUniqueInput } from "../templateDatum/TemplateDatumWhereUniqueInput";

export type TemplateItemUpdateInput = {
  name?: string;
  templateData?: TemplateDatumWhereUniqueInput;
  type?: "CORE" | "OPTIONAL";
};
