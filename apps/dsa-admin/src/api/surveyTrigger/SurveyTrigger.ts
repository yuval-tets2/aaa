import { EventClass } from "../eventClass/EventClass";
import { Survey } from "../survey/Survey";

export type SurveyTrigger = {
  createdAt: Date;
  eventClass?: EventClass;
  id: string;
  survey?: Survey;
  updatedAt: Date;
};
