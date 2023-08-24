import { TagsOnResponse as TTagsOnResponse } from "../api/tagsOnResponse/TagsOnResponse";

export const TAGSONRESPONSE_TITLE_FIELD = "id";

export const TagsOnResponseTitle = (record: TTagsOnResponse): string => {
  return record.id || String(record.id);
};
