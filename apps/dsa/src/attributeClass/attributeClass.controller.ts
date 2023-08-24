import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttributeClassService } from "./attributeClass.service";
import { AttributeClassControllerBase } from "./base/attributeClass.controller.base";

@swagger.ApiTags("attributeClasses")
@common.Controller("attributeClasses")
export class AttributeClassController extends AttributeClassControllerBase {
  constructor(protected readonly service: AttributeClassService) {
    super(service);
  }
}
