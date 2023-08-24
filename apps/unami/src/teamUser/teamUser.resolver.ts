import * as graphql from "@nestjs/graphql";
import { TeamUserResolverBase } from "./base/teamUser.resolver.base";
import { TeamUser } from "./base/TeamUser";
import { TeamUserService } from "./teamUser.service";

@graphql.Resolver(() => TeamUser)
export class TeamUserResolver extends TeamUserResolverBase {
  constructor(protected readonly service: TeamUserService) {
    super(service);
  }
}
