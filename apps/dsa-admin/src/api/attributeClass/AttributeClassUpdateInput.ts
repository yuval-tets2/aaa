import { SurveyAttributeFilterUpdateManyWithoutAttributeClassesInput } from "./SurveyAttributeFilterUpdateManyWithoutAttributeClassesInput";
import { AttributeUpdateManyWithoutAttributeClassesInput } from "./AttributeUpdateManyWithoutAttributeClassesInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type AttributeClassUpdateInput = {
  archived?: boolean;
  attributeFilters?: SurveyAttributeFilterUpdateManyWithoutAttributeClassesInput;
  attributes?: AttributeUpdateManyWithoutAttributeClassesInput;
  description?: string | null;
  environment?: EnvironmentWhereUniqueInput;
  name?: string;
  type?: "code" | "noCode" | "automatic";
};
