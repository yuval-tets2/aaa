import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BypassService } from "./bypass.service";
import { BypassControllerBase } from "./base/bypass.controller.base";

@swagger.ApiTags("bypasses")
@common.Controller("bypasses")
export class BypassController extends BypassControllerBase {
  constructor(protected readonly service: BypassService) {
    super(service);
  }
}
