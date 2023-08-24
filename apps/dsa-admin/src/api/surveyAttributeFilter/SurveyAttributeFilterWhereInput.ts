import { AttributeClassWhereUniqueInput } from "../attributeClass/AttributeClassWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type SurveyAttributeFilterWhereInput = {
  attributeClass?: AttributeClassWhereUniqueInput;
  survey?: SurveyWhereUniqueInput;
};
