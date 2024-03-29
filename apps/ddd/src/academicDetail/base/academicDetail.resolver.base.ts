/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteAcademicDetailArgs } from "./DeleteAcademicDetailArgs";
import { AcademicDetailCountArgs } from "./AcademicDetailCountArgs";
import { AcademicDetailFindManyArgs } from "./AcademicDetailFindManyArgs";
import { AcademicDetailFindUniqueArgs } from "./AcademicDetailFindUniqueArgs";
import { AcademicDetail } from "./AcademicDetail";
import { AcademicDetailService } from "../academicDetail.service";
@graphql.Resolver(() => AcademicDetail)
export class AcademicDetailResolverBase {
  constructor(protected readonly service: AcademicDetailService) {}

  async _academicDetailsMeta(
    @graphql.Args() args: AcademicDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AcademicDetail])
  async academicDetails(
    @graphql.Args() args: AcademicDetailFindManyArgs
  ): Promise<AcademicDetail[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => AcademicDetail, { nullable: true })
  async academicDetail(
    @graphql.Args() args: AcademicDetailFindUniqueArgs
  ): Promise<AcademicDetail | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AcademicDetail)
  async deleteAcademicDetail(
    @graphql.Args() args: DeleteAcademicDetailArgs
  ): Promise<AcademicDetail | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
