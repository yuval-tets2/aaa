import { EventClassWhereUniqueInput } from "../eventClass/EventClassWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type EventWhereInput = {
  eventClass?: EventClassWhereUniqueInput;
  session?: SessionWhereUniqueInput;
};
