import { Environment } from "../environment/Environment";
import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { SurveyTrigger } from "../surveyTrigger/SurveyTrigger";

export type EventClass = {
  createdAt: Date;
  description: string | null;
  environment?: Environment;
  events?: Array<Event>;
  id: string;
  name: string;
  noCodeConfig: JsonValue;
  surveys?: Array<SurveyTrigger>;
  type?: "code" | "noCode" | "automatic";
  updatedAt: Date;
};
