import * as graphql from "@nestjs/graphql";
import { AcademicDetailResolverBase } from "./base/academicDetail.resolver.base";
import { AcademicDetail } from "./base/AcademicDetail";
import { AcademicDetailService } from "./academicDetail.service";

@graphql.Resolver(() => AcademicDetail)
export class AcademicDetailResolver extends AcademicDetailResolverBase {
  constructor(protected readonly service: AcademicDetailService) {
    super(service);
  }
}
