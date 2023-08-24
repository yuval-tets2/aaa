import * as graphql from "@nestjs/graphql";
import { EnvironmentResolverBase } from "./base/environment.resolver.base";
import { Environment } from "./base/Environment";
import { EnvironmentService } from "./environment.service";

@graphql.Resolver(() => Environment)
export class EnvironmentResolver extends EnvironmentResolverBase {
  constructor(protected readonly service: EnvironmentService) {
    super(service);
  }
}
