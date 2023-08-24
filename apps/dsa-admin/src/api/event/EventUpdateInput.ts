import { EventClassWhereUniqueInput } from "../eventClass/EventClassWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type EventUpdateInput = {
  eventClass?: EventClassWhereUniqueInput | null;
  properties?: InputJsonValue;
  session?: SessionWhereUniqueInput;
};
