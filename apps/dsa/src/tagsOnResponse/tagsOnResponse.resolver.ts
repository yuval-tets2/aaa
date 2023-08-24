import * as graphql from "@nestjs/graphql";
import { TagsOnResponseResolverBase } from "./base/tagsOnResponse.resolver.base";
import { TagsOnResponse } from "./base/TagsOnResponse";
import { TagsOnResponseService } from "./tagsOnResponse.service";

@graphql.Resolver(() => TagsOnResponse)
export class TagsOnResponseResolver extends TagsOnResponseResolverBase {
  constructor(protected readonly service: TagsOnResponseService) {
    super(service);
  }
}
