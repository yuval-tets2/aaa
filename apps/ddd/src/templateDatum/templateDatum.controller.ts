import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TemplateDatumService } from "./templateDatum.service";
import { TemplateDatumControllerBase } from "./base/templateDatum.controller.base";

@swagger.ApiTags("templateData")
@common.Controller("templateData")
export class TemplateDatumController extends TemplateDatumControllerBase {
  constructor(protected readonly service: TemplateDatumService) {
    super(service);
  }
}
