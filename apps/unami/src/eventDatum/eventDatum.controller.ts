import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventDatumService } from "./eventDatum.service";
import { EventDatumControllerBase } from "./base/eventDatum.controller.base";

@swagger.ApiTags("eventData")
@common.Controller("eventData")
export class EventDatumController extends EventDatumControllerBase {
  constructor(protected readonly service: EventDatumService) {
    super(service);
  }
}
