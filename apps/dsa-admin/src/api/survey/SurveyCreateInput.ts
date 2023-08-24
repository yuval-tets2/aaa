import { SurveyAttributeFilterCreateNestedManyWithoutSurveysInput } from "./SurveyAttributeFilterCreateNestedManyWithoutSurveysInput";
import { DisplayCreateNestedManyWithoutSurveysInput } from "./DisplayCreateNestedManyWithoutSurveysInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ResponseCreateNestedManyWithoutSurveysInput } from "./ResponseCreateNestedManyWithoutSurveysInput";
import { SurveyTriggerCreateNestedManyWithoutSurveysInput } from "./SurveyTriggerCreateNestedManyWithoutSurveysInput";

export type SurveyCreateInput = {
  attributeFilters?: SurveyAttributeFilterCreateNestedManyWithoutSurveysInput;
  autoClose?: number | null;
  autoComplete?: number | null;
  closeOnDate?: Date | null;
  delay: number;
  displayOption: "displayOnce" | "displayMultiple" | "respondMultiple";
  displays?: DisplayCreateNestedManyWithoutSurveysInput;
  environment: EnvironmentWhereUniqueInput;
  name: string;
  questions: InputJsonValue;
  recontactDays?: number | null;
  redirectUrl?: string | null;
  responses?: ResponseCreateNestedManyWithoutSurveysInput;
  status: "draft" | "inProgress" | "paused" | "completed" | "archived";
  surveyClosedMessage?: InputJsonValue;
  thankYouCard: InputJsonValue;
  triggers?: SurveyTriggerCreateNestedManyWithoutSurveysInput;
  type: "email" | "link" | "mobile" | "web";
};
