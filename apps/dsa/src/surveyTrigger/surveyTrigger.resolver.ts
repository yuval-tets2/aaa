import * as graphql from "@nestjs/graphql";
import { SurveyTriggerResolverBase } from "./base/surveyTrigger.resolver.base";
import { SurveyTrigger } from "./base/SurveyTrigger";
import { SurveyTriggerService } from "./surveyTrigger.service";

@graphql.Resolver(() => SurveyTrigger)
export class SurveyTriggerResolver extends SurveyTriggerResolverBase {
  constructor(protected readonly service: SurveyTriggerService) {
    super(service);
  }
}
