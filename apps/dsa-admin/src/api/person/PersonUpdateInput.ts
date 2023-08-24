import { AttributeUpdateManyWithoutPeopleInput } from "./AttributeUpdateManyWithoutPeopleInput";
import { DisplayUpdateManyWithoutPeopleInput } from "./DisplayUpdateManyWithoutPeopleInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { ResponseUpdateManyWithoutPeopleInput } from "./ResponseUpdateManyWithoutPeopleInput";
import { SessionUpdateManyWithoutPeopleInput } from "./SessionUpdateManyWithoutPeopleInput";

export type PersonUpdateInput = {
  attributes?: AttributeUpdateManyWithoutPeopleInput;
  displays?: DisplayUpdateManyWithoutPeopleInput;
  environment?: EnvironmentWhereUniqueInput;
  responses?: ResponseUpdateManyWithoutPeopleInput;
  sessions?: SessionUpdateManyWithoutPeopleInput;
};
