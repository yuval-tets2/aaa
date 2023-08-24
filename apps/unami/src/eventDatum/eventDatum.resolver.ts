import * as graphql from "@nestjs/graphql";
import { EventDatumResolverBase } from "./base/eventDatum.resolver.base";
import { EventDatum } from "./base/EventDatum";
import { EventDatumService } from "./eventDatum.service";

@graphql.Resolver(() => EventDatum)
export class EventDatumResolver extends EventDatumResolverBase {
  constructor(protected readonly service: EventDatumService) {
    super(service);
  }
}
