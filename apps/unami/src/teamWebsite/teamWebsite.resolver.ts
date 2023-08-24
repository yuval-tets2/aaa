import * as graphql from "@nestjs/graphql";
import { TeamWebsiteResolverBase } from "./base/teamWebsite.resolver.base";
import { TeamWebsite } from "./base/TeamWebsite";
import { TeamWebsiteService } from "./teamWebsite.service";

@graphql.Resolver(() => TeamWebsite)
export class TeamWebsiteResolver extends TeamWebsiteResolverBase {
  constructor(protected readonly service: TeamWebsiteService) {
    super(service);
  }
}
