import * as graphql from "@nestjs/graphql";
import { DegreeRequirementResolverBase } from "./base/degreeRequirement.resolver.base";
import { DegreeRequirement } from "./base/DegreeRequirement";
import { DegreeRequirementService } from "./degreeRequirement.service";

@graphql.Resolver(() => DegreeRequirement)
export class DegreeRequirementResolver extends DegreeRequirementResolverBase {
  constructor(protected readonly service: DegreeRequirementService) {
    super(service);
  }
}
