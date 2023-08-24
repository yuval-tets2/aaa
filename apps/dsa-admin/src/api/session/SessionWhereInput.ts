import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SessionWhereInput = {
  events?: EventListRelationFilter;
  person?: PersonWhereUniqueInput;
};
