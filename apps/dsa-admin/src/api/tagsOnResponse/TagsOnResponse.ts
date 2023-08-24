import { Response } from "../response/Response";
import { Tag } from "../tag/Tag";

export type TagsOnResponse = {
  id: string;
  response?: Response;
  tag?: Tag;
};
