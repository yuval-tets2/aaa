import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { EventCreateNestedManyWithoutEventClassesInput } from "./EventCreateNestedManyWithoutEventClassesInput";
import { InputJsonValue } from "../../types";
import { SurveyTriggerCreateNestedManyWithoutEventClassesInput } from "./SurveyTriggerCreateNestedManyWithoutEventClassesInput";

export type EventClassCreateInput = {
  description?: string | null;
  environment: EnvironmentWhereUniqueInput;
  events?: EventCreateNestedManyWithoutEventClassesInput;
  name: string;
  noCodeConfig?: InputJsonValue;
  surveys?: SurveyTriggerCreateNestedManyWithoutEventClassesInput;
  type: "code" | "noCode" | "automatic";
};
