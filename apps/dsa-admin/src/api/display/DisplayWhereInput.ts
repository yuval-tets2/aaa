import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type DisplayWhereInput = {
  person?: PersonWhereUniqueInput;
  survey?: SurveyWhereUniqueInput;
};
