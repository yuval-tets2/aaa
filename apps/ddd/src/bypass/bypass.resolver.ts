import * as graphql from "@nestjs/graphql";
import { BypassResolverBase } from "./base/bypass.resolver.base";
import { Bypass } from "./base/Bypass";
import { BypassService } from "./bypass.service";

@graphql.Resolver(() => Bypass)
export class BypassResolver extends BypassResolverBase {
  constructor(protected readonly service: BypassService) {
    super(service);
  }
}
