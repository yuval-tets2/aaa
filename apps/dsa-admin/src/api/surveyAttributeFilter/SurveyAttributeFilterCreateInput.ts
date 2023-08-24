import { AttributeClassWhereUniqueInput } from "../attributeClass/AttributeClassWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type SurveyAttributeFilterCreateInput = {
  attributeClass: AttributeClassWhereUniqueInput;
  condition: "equals" | "notEquals";
  survey: SurveyWhereUniqueInput;
  value: string;
};
