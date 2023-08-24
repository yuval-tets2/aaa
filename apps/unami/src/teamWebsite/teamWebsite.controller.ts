import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamWebsiteService } from "./teamWebsite.service";
import { TeamWebsiteControllerBase } from "./base/teamWebsite.controller.base";

@swagger.ApiTags("teamWebsites")
@common.Controller("teamWebsites")
export class TeamWebsiteController extends TeamWebsiteControllerBase {
  constructor(protected readonly service: TeamWebsiteService) {
    super(service);
  }
}
