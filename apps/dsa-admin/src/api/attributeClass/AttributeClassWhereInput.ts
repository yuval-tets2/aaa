import { SurveyAttributeFilterListRelationFilter } from "../surveyAttributeFilter/SurveyAttributeFilterListRelationFilter";
import { AttributeListRelationFilter } from "../attribute/AttributeListRelationFilter";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type AttributeClassWhereInput = {
  attributeFilters?: SurveyAttributeFilterListRelationFilter;
  attributes?: AttributeListRelationFilter;
  environment?: EnvironmentWhereUniqueInput;
};
