import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnvironmentService } from "./environment.service";
import { EnvironmentControllerBase } from "./base/environment.controller.base";

@swagger.ApiTags("environments")
@common.Controller("environments")
export class EnvironmentController extends EnvironmentControllerBase {
  constructor(protected readonly service: EnvironmentService) {
    super(service);
  }
}
