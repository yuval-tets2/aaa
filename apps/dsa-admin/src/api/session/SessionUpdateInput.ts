import { EventUpdateManyWithoutSessionsInput } from "./EventUpdateManyWithoutSessionsInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SessionUpdateInput = {
  events?: EventUpdateManyWithoutSessionsInput;
  person?: PersonWhereUniqueInput;
};
