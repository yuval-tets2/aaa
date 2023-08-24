import { AttributeCreateNestedManyWithoutPeopleInput } from "./AttributeCreateNestedManyWithoutPeopleInput";
import { DisplayCreateNestedManyWithoutPeopleInput } from "./DisplayCreateNestedManyWithoutPeopleInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { ResponseCreateNestedManyWithoutPeopleInput } from "./ResponseCreateNestedManyWithoutPeopleInput";
import { SessionCreateNestedManyWithoutPeopleInput } from "./SessionCreateNestedManyWithoutPeopleInput";

export type PersonCreateInput = {
  attributes?: AttributeCreateNestedManyWithoutPeopleInput;
  displays?: DisplayCreateNestedManyWithoutPeopleInput;
  environment: EnvironmentWhereUniqueInput;
  responses?: ResponseCreateNestedManyWithoutPeopleInput;
  sessions?: SessionCreateNestedManyWithoutPeopleInput;
};
