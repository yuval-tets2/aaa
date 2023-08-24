import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamUserService } from "./teamUser.service";
import { TeamUserControllerBase } from "./base/teamUser.controller.base";

@swagger.ApiTags("teamUsers")
@common.Controller("teamUsers")
export class TeamUserController extends TeamUserControllerBase {
  constructor(protected readonly service: TeamUserService) {
    super(service);
  }
}
