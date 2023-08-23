import * as graphql from "@nestjs/graphql";
import { TemplateItemResolverBase } from "./base/templateItem.resolver.base";
import { TemplateItem } from "./base/TemplateItem";
import { TemplateItemService } from "./templateItem.service";

@graphql.Resolver(() => TemplateItem)
export class TemplateItemResolver extends TemplateItemResolverBase {
  constructor(protected readonly service: TemplateItemService) {
    super(service);
  }
}
