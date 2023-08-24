import { Environment } from "../environment/Environment";
import { TagsOnResponse } from "../tagsOnResponse/TagsOnResponse";

export type Tag = {
  createdAt: Date;
  environment?: Environment;
  id: string;
  name: string;
  responses?: Array<TagsOnResponse>;
  updatedAt: Date;
};
