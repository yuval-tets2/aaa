import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DisplayService } from "./display.service";
import { DisplayControllerBase } from "./base/display.controller.base";

@swagger.ApiTags("displays")
@common.Controller("displays")
export class DisplayController extends DisplayControllerBase {
  constructor(protected readonly service: DisplayService) {
    super(service);
  }
}
