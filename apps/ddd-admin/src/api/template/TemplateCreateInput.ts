import { TemplateDatumCreateNestedManyWithoutTemplatesInput } from "./TemplateDatumCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  name?: string | null;
  templateData?: TemplateDatumCreateNestedManyWithoutTemplatesInput;
};
