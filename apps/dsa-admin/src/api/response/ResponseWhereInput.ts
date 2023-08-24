import { ResponseNoteListRelationFilter } from "../responseNote/ResponseNoteListRelationFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { TagsOnResponseListRelationFilter } from "../tagsOnResponse/TagsOnResponseListRelationFilter";

export type ResponseWhereInput = {
  notes?: ResponseNoteListRelationFilter;
  person?: PersonWhereUniqueInput;
  survey?: SurveyWhereUniqueInput;
  tags?: TagsOnResponseListRelationFilter;
};
