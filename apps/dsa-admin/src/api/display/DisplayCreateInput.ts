import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type DisplayCreateInput = {
  person?: PersonWhereUniqueInput | null;
  status: "seen" | "responded";
  survey: SurveyWhereUniqueInput;
};
