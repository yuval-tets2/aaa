import * as graphql from "@nestjs/graphql";
import { AttributeClassResolverBase } from "./base/attributeClass.resolver.base";
import { AttributeClass } from "./base/AttributeClass";
import { AttributeClassService } from "./attributeClass.service";

@graphql.Resolver(() => AttributeClass)
export class AttributeClassResolver extends AttributeClassResolverBase {
  constructor(protected readonly service: AttributeClassService) {
    super(service);
  }
}
