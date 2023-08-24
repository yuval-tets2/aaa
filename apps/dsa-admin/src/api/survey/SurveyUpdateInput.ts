import { SurveyAttributeFilterUpdateManyWithoutSurveysInput } from "./SurveyAttributeFilterUpdateManyWithoutSurveysInput";
import { DisplayUpdateManyWithoutSurveysInput } from "./DisplayUpdateManyWithoutSurveysInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ResponseUpdateManyWithoutSurveysInput } from "./ResponseUpdateManyWithoutSurveysInput";
import { SurveyTriggerUpdateManyWithoutSurveysInput } from "./SurveyTriggerUpdateManyWithoutSurveysInput";

export type SurveyUpdateInput = {
  attributeFilters?: SurveyAttributeFilterUpdateManyWithoutSurveysInput;
  autoClose?: number | null;
  autoComplete?: number | null;
  closeOnDate?: Date | null;
  delay?: number;
  displayOption?: "displayOnce" | "displayMultiple" | "respondMultiple";
  displays?: DisplayUpdateManyWithoutSurveysInput;
  environment?: EnvironmentWhereUniqueInput;
  name?: string;
  questions?: InputJsonValue;
  recontactDays?: number | null;
  redirectUrl?: string | null;
  responses?: ResponseUpdateManyWithoutSurveysInput;
  status?: "draft" | "inProgress" | "paused" | "completed" | "archived";
  surveyClosedMessage?: InputJsonValue;
  thankYouCard?: InputJsonValue;
  triggers?: SurveyTriggerUpdateManyWithoutSurveysInput;
  type?: "email" | "link" | "mobile" | "web";
};
