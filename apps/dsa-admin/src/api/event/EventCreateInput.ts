import { EventClassWhereUniqueInput } from "../eventClass/EventClassWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type EventCreateInput = {
  eventClass?: EventClassWhereUniqueInput | null;
  properties: InputJsonValue;
  session: SessionWhereUniqueInput;
};
