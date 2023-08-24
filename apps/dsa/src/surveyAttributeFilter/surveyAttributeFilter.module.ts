import { Module } from "@nestjs/common";
import { SurveyAttributeFilterModuleBase } from "./base/surveyAttributeFilter.module.base";
import { SurveyAttributeFilterService } from "./surveyAttributeFilter.service";
import { SurveyAttributeFilterController } from "./surveyAttributeFilter.controller";
import { SurveyAttributeFilterResolver } from "./surveyAttributeFilter.resolver";

@Module({
  imports: [SurveyAttributeFilterModuleBase],
  controllers: [SurveyAttributeFilterController],
  providers: [SurveyAttributeFilterService, SurveyAttributeFilterResolver],
  exports: [SurveyAttributeFilterService],
})
export class SurveyAttributeFilterModule {}
