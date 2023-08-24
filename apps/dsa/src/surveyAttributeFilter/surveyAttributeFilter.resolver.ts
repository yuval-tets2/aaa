import * as graphql from "@nestjs/graphql";
import { SurveyAttributeFilterResolverBase } from "./base/surveyAttributeFilter.resolver.base";
import { SurveyAttributeFilter } from "./base/SurveyAttributeFilter";
import { SurveyAttributeFilterService } from "./surveyAttributeFilter.service";

@graphql.Resolver(() => SurveyAttributeFilter)
export class SurveyAttributeFilterResolver extends SurveyAttributeFilterResolverBase {
  constructor(protected readonly service: SurveyAttributeFilterService) {
    super(service);
  }
}
