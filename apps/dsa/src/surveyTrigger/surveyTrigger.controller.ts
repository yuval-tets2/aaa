import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SurveyTriggerService } from "./surveyTrigger.service";
import { SurveyTriggerControllerBase } from "./base/surveyTrigger.controller.base";

@swagger.ApiTags("surveyTriggers")
@common.Controller("surveyTriggers")
export class SurveyTriggerController extends SurveyTriggerControllerBase {
  constructor(protected readonly service: SurveyTriggerService) {
    super(service);
  }
}
