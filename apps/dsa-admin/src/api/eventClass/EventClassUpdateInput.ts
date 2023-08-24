import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { EventUpdateManyWithoutEventClassesInput } from "./EventUpdateManyWithoutEventClassesInput";
import { InputJsonValue } from "../../types";
import { SurveyTriggerUpdateManyWithoutEventClassesInput } from "./SurveyTriggerUpdateManyWithoutEventClassesInput";

export type EventClassUpdateInput = {
  description?: string | null;
  environment?: EnvironmentWhereUniqueInput;
  events?: EventUpdateManyWithoutEventClassesInput;
  name?: string;
  noCodeConfig?: InputJsonValue;
  surveys?: SurveyTriggerUpdateManyWithoutEventClassesInput;
  type?: "code" | "noCode" | "automatic";
};
