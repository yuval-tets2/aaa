import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TemplateItemService } from "./templateItem.service";
import { TemplateItemControllerBase } from "./base/templateItem.controller.base";

@swagger.ApiTags("templateItems")
@common.Controller("templateItems")
export class TemplateItemController extends TemplateItemControllerBase {
  constructor(protected readonly service: TemplateItemService) {
    super(service);
  }
}
