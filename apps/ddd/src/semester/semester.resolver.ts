import * as graphql from "@nestjs/graphql";
import { SemesterResolverBase } from "./base/semester.resolver.base";
import { Semester } from "./base/Semester";
import { SemesterService } from "./semester.service";

@graphql.Resolver(() => Semester)
export class SemesterResolver extends SemesterResolverBase {
  constructor(protected readonly service: SemesterService) {
    super(service);
  }
}
