import { InputJsonValue } from "../../types";
import { ResponseNoteUpdateManyWithoutResponsesInput } from "./ResponseNoteUpdateManyWithoutResponsesInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { TagsOnResponseUpdateManyWithoutResponsesInput } from "./TagsOnResponseUpdateManyWithoutResponsesInput";

export type ResponseUpdateInput = {
  data?: InputJsonValue;
  finished?: boolean;
  meta?: InputJsonValue;
  notes?: ResponseNoteUpdateManyWithoutResponsesInput;
  person?: PersonWhereUniqueInput | null;
  personAttributes?: InputJsonValue;
  survey?: SurveyWhereUniqueInput;
  tags?: TagsOnResponseUpdateManyWithoutResponsesInput;
};
