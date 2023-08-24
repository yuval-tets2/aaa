import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventClassService } from "./eventClass.service";
import { EventClassControllerBase } from "./base/eventClass.controller.base";

@swagger.ApiTags("eventClasses")
@common.Controller("eventClasses")
export class EventClassController extends EventClassControllerBase {
  constructor(protected readonly service: EventClassService) {
    super(service);
  }
}
