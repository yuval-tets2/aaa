import { SurveyAttributeFilterListRelationFilter } from "../surveyAttributeFilter/SurveyAttributeFilterListRelationFilter";
import { DisplayListRelationFilter } from "../display/DisplayListRelationFilter";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { SurveyTriggerListRelationFilter } from "../surveyTrigger/SurveyTriggerListRelationFilter";

export type SurveyWhereInput = {
  attributeFilters?: SurveyAttributeFilterListRelationFilter;
  displays?: DisplayListRelationFilter;
  environment?: EnvironmentWhereUniqueInput;
  responses?: ResponseListRelationFilter;
  triggers?: SurveyTriggerListRelationFilter;
};
