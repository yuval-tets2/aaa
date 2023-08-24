import { InputJsonValue } from "../../types";
import { ResponseNoteCreateNestedManyWithoutResponsesInput } from "./ResponseNoteCreateNestedManyWithoutResponsesInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { TagsOnResponseCreateNestedManyWithoutResponsesInput } from "./TagsOnResponseCreateNestedManyWithoutResponsesInput";

export type ResponseCreateInput = {
  data: InputJsonValue;
  finished: boolean;
  meta: InputJsonValue;
  notes?: ResponseNoteCreateNestedManyWithoutResponsesInput;
  person?: PersonWhereUniqueInput | null;
  personAttributes?: InputJsonValue;
  survey: SurveyWhereUniqueInput;
  tags?: TagsOnResponseCreateNestedManyWithoutResponsesInput;
};
