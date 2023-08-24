import { JsonValue } from "type-fest";
import { ResponseNote } from "../responseNote/ResponseNote";
import { Person } from "../person/Person";
import { Survey } from "../survey/Survey";
import { TagsOnResponse } from "../tagsOnResponse/TagsOnResponse";

export type Response = {
  createdAt: Date;
  data: JsonValue;
  finished: boolean;
  id: string;
  meta: JsonValue;
  notes?: Array<ResponseNote>;
  person?: Person | null;
  personAttributes: JsonValue;
  survey?: Survey;
  tags?: Array<TagsOnResponse>;
  updatedAt: Date;
};
