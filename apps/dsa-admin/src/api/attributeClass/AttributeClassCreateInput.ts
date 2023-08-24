import { SurveyAttributeFilterCreateNestedManyWithoutAttributeClassesInput } from "./SurveyAttributeFilterCreateNestedManyWithoutAttributeClassesInput";
import { AttributeCreateNestedManyWithoutAttributeClassesInput } from "./AttributeCreateNestedManyWithoutAttributeClassesInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type AttributeClassCreateInput = {
  archived: boolean;
  attributeFilters?: SurveyAttributeFilterCreateNestedManyWithoutAttributeClassesInput;
  attributes?: AttributeCreateNestedManyWithoutAttributeClassesInput;
  description?: string | null;
  environment: EnvironmentWhereUniqueInput;
  name: string;
  type: "code" | "noCode" | "automatic";
};
