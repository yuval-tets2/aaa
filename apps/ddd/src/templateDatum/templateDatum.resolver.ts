import * as graphql from "@nestjs/graphql";
import { TemplateDatumResolverBase } from "./base/templateDatum.resolver.base";
import { TemplateDatum } from "./base/TemplateDatum";
import { TemplateDatumService } from "./templateDatum.service";

@graphql.Resolver(() => TemplateDatum)
export class TemplateDatumResolver extends TemplateDatumResolverBase {
  constructor(protected readonly service: TemplateDatumService) {
    super(service);
  }
}
