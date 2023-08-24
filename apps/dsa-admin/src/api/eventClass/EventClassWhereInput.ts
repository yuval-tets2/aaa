import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { SurveyTriggerListRelationFilter } from "../surveyTrigger/SurveyTriggerListRelationFilter";

export type EventClassWhereInput = {
  environment?: EnvironmentWhereUniqueInput;
  events?: EventListRelationFilter;
  surveys?: SurveyTriggerListRelationFilter;
};
