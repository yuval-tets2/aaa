import { EventClassWhereUniqueInput } from "../eventClass/EventClassWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type SurveyTriggerUpdateInput = {
  eventClass?: EventClassWhereUniqueInput;
  survey?: SurveyWhereUniqueInput;
};
