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
import { CreateBypassArgs } from "./CreateBypassArgs";
import { UpdateBypassArgs } from "./UpdateBypassArgs";
import { DeleteBypassArgs } from "./DeleteBypassArgs";
import { BypassCountArgs } from "./BypassCountArgs";
import { BypassFindManyArgs } from "./BypassFindManyArgs";
import { BypassFindUniqueArgs } from "./BypassFindUniqueArgs";
import { Bypass } from "./Bypass";
import { BypassService } from "../bypass.service";
@graphql.Resolver(() => Bypass)
export class BypassResolverBase {
  constructor(protected readonly service: BypassService) {}

  async _bypassesMeta(
    @graphql.Args() args: BypassCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Bypass])
  async bypasses(@graphql.Args() args: BypassFindManyArgs): Promise<Bypass[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Bypass, { nullable: true })
  async bypass(
    @graphql.Args() args: BypassFindUniqueArgs
  ): Promise<Bypass | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Bypass)
  async createBypass(@graphql.Args() args: CreateBypassArgs): Promise<Bypass> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Bypass)
  async updateBypass(
    @graphql.Args() args: UpdateBypassArgs
  ): Promise<Bypass | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bypass)
  async deleteBypass(
    @graphql.Args() args: DeleteBypassArgs
  ): Promise<Bypass | null> {
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
