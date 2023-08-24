import { EventClassWhereUniqueInput } from "../eventClass/EventClassWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type SurveyTriggerWhereInput = {
  eventClass?: EventClassWhereUniqueInput;
  survey?: SurveyWhereUniqueInput;
};
