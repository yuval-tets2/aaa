import { EventCreateNestedManyWithoutSessionsInput } from "./EventCreateNestedManyWithoutSessionsInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SessionCreateInput = {
  events?: EventCreateNestedManyWithoutSessionsInput;
  person: PersonWhereUniqueInput;
};
