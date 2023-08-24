import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebsiteEventService } from "./websiteEvent.service";
import { WebsiteEventControllerBase } from "./base/websiteEvent.controller.base";

@swagger.ApiTags("websiteEvents")
@common.Controller("websiteEvents")
export class WebsiteEventController extends WebsiteEventControllerBase {
  constructor(protected readonly service: WebsiteEventService) {
    super(service);
  }
}
