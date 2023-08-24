import * as graphql from "@nestjs/graphql";
import { InviteResolverBase } from "./base/invite.resolver.base";
import { Invite } from "./base/Invite";
import { InviteService } from "./invite.service";

@graphql.Resolver(() => Invite)
export class InviteResolver extends InviteResolverBase {
  constructor(protected readonly service: InviteService) {
    super(service);
  }
}
