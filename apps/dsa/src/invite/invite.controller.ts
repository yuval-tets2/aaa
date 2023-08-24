import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InviteService } from "./invite.service";
import { InviteControllerBase } from "./base/invite.controller.base";

@swagger.ApiTags("invites")
@common.Controller("invites")
export class InviteController extends InviteControllerBase {
  constructor(protected readonly service: InviteService) {
    super(service);
  }
}
