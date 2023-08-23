import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SemesterService } from "./semester.service";
import { SemesterControllerBase } from "./base/semester.controller.base";

@swagger.ApiTags("semesters")
@common.Controller("semesters")
export class SemesterController extends SemesterControllerBase {
  constructor(protected readonly service: SemesterService) {
    super(service);
  }
}
