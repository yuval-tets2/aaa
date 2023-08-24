import * as graphql from "@nestjs/graphql";
import { SessionDatumResolverBase } from "./base/sessionDatum.resolver.base";
import { SessionDatum } from "./base/SessionDatum";
import { SessionDatumService } from "./sessionDatum.service";

@graphql.Resolver(() => SessionDatum)
export class SessionDatumResolver extends SessionDatumResolverBase {
  constructor(protected readonly service: SessionDatumService) {
    super(service);
  }
}
