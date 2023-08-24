import * as graphql from "@nestjs/graphql";
import { WebsiteEventResolverBase } from "./base/websiteEvent.resolver.base";
import { WebsiteEvent } from "./base/WebsiteEvent";
import { WebsiteEventService } from "./websiteEvent.service";

@graphql.Resolver(() => WebsiteEvent)
export class WebsiteEventResolver extends WebsiteEventResolverBase {
  constructor(protected readonly service: WebsiteEventService) {
    super(service);
  }
}
