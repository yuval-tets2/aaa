import { TemplateItemCreateNestedManyWithoutTemplateDataInput } from "./TemplateItemCreateNestedManyWithoutTemplateDataInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TemplateDatumCreateInput = {
  items?: TemplateItemCreateNestedManyWithoutTemplateDataInput;
  semester: number;
  template: TemplateWhereUniqueInput;
};
