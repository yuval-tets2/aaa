import * as graphql from "@nestjs/graphql";
import { AttributeResolverBase } from "./base/attribute.resolver.base";
import { Attribute } from "./base/Attribute";
import { AttributeService } from "./attribute.service";

@graphql.Resolver(() => Attribute)
export class AttributeResolver extends AttributeResolverBase {
  constructor(protected readonly service: AttributeService) {
    super(service);
  }
}
