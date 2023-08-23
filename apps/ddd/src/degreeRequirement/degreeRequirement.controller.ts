import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DegreeRequirementService } from "./degreeRequirement.service";
import { DegreeRequirementControllerBase } from "./base/degreeRequirement.controller.base";

@swagger.ApiTags("degreeRequirements")
@common.Controller("degreeRequirements")
export class DegreeRequirementController extends DegreeRequirementControllerBase {
  constructor(protected readonly service: DegreeRequirementService) {
    super(service);
  }
}
