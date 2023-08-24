import * as graphql from "@nestjs/graphql";
import { EventClassResolverBase } from "./base/eventClass.resolver.base";
import { EventClass } from "./base/EventClass";
import { EventClassService } from "./eventClass.service";

@graphql.Resolver(() => EventClass)
export class EventClassResolver extends EventClassResolverBase {
  constructor(protected readonly service: EventClassService) {
    super(service);
  }
}
