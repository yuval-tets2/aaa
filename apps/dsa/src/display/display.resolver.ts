import * as graphql from "@nestjs/graphql";
import { DisplayResolverBase } from "./base/display.resolver.base";
import { Display } from "./base/Display";
import { DisplayService } from "./display.service";

@graphql.Resolver(() => Display)
export class DisplayResolver extends DisplayResolverBase {
  constructor(protected readonly service: DisplayService) {
    super(service);
  }
}
