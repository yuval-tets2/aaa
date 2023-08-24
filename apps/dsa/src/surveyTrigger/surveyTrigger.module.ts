import { Module } from "@nestjs/common";
import { SurveyTriggerModuleBase } from "./base/surveyTrigger.module.base";
import { SurveyTriggerService } from "./surveyTrigger.service";
import { SurveyTriggerController } from "./surveyTrigger.controller";
import { SurveyTriggerResolver } from "./surveyTrigger.resolver";

@Module({
  imports: [SurveyTriggerModuleBase],
  controllers: [SurveyTriggerController],
  providers: [SurveyTriggerService, SurveyTriggerResolver],
  exports: [SurveyTriggerService],
})
export class SurveyTriggerModule {}
