import { TemplateItemUpdateManyWithoutTemplateDataInput } from "./TemplateItemUpdateManyWithoutTemplateDataInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TemplateDatumUpdateInput = {
  items?: TemplateItemUpdateManyWithoutTemplateDataInput;
  semester?: number;
  template?: TemplateWhereUniqueInput;
};
