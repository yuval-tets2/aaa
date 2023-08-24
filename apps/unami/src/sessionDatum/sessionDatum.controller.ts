import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SessionDatumService } from "./sessionDatum.service";
import { SessionDatumControllerBase } from "./base/sessionDatum.controller.base";

@swagger.ApiTags("sessionData")
@common.Controller("sessionData")
export class SessionDatumController extends SessionDatumControllerBase {
  constructor(protected readonly service: SessionDatumService) {
    super(service);
  }
}
