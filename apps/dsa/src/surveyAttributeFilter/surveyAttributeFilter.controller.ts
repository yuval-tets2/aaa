import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SurveyAttributeFilterService } from "./surveyAttributeFilter.service";
import { SurveyAttributeFilterControllerBase } from "./base/surveyAttributeFilter.controller.base";

@swagger.ApiTags("surveyAttributeFilters")
@common.Controller("surveyAttributeFilters")
export class SurveyAttributeFilterController extends SurveyAttributeFilterControllerBase {
  constructor(protected readonly service: SurveyAttributeFilterService) {
    super(service);
  }
}
