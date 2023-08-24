import { EventClassWhereUniqueInput } from "../eventClass/EventClassWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type SurveyTriggerCreateInput = {
  eventClass: EventClassWhereUniqueInput;
  survey: SurveyWhereUniqueInput;
};
