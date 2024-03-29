import { SurveyAttributeFilter } from "../surveyAttributeFilter/SurveyAttributeFilter";
import { Display } from "../display/Display";
import { Environment } from "../environment/Environment";
import { JsonValue } from "type-fest";
import { Response } from "../response/Response";
import { SurveyTrigger } from "../surveyTrigger/SurveyTrigger";

export type Survey = {
  attributeFilters?: Array<SurveyAttributeFilter>;
  autoClose: number | null;
  autoComplete: number | null;
  closeOnDate: Date | null;
  createdAt: Date;
  delay: number;
  displayOption?: "displayOnce" | "displayMultiple" | "respondMultiple";
  displays?: Array<Display>;
  environment?: Environment;
  id: string;
  name: string;
  questions: JsonValue;
  recontactDays: number | null;
  redirectUrl: string | null;
  responses?: Array<Response>;
  status?: "draft" | "inProgress" | "paused" | "completed" | "archived";
  surveyClosedMessage: JsonValue;
  thankYouCard: JsonValue;
  triggers?: Array<SurveyTrigger>;
  type?: "email" | "link" | "mobile" | "web";
  updatedAt: Date;
};
