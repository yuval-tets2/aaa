import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcademicDetailService } from "./academicDetail.service";
import { AcademicDetailControllerBase } from "./base/academicDetail.controller.base";

@swagger.ApiTags("academicDetails")
@common.Controller("academicDetails")
export class AcademicDetailController extends AcademicDetailControllerBase {
  constructor(protected readonly service: AcademicDetailService) {
    super(service);
  }
}
