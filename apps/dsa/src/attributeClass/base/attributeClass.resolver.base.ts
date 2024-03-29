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
import { CreateAttributeClassArgs } from "./CreateAttributeClassArgs";
import { UpdateAttributeClassArgs } from "./UpdateAttributeClassArgs";
import { DeleteAttributeClassArgs } from "./DeleteAttributeClassArgs";
import { AttributeClassCountArgs } from "./AttributeClassCountArgs";
import { AttributeClassFindManyArgs } from "./AttributeClassFindManyArgs";
import { AttributeClassFindUniqueArgs } from "./AttributeClassFindUniqueArgs";
import { AttributeClass } from "./AttributeClass";
import { SurveyAttributeFilterFindManyArgs } from "../../surveyAttributeFilter/base/SurveyAttributeFilterFindManyArgs";
import { SurveyAttributeFilter } from "../../surveyAttributeFilter/base/SurveyAttributeFilter";
import { AttributeFindManyArgs } from "../../attribute/base/AttributeFindManyArgs";
import { Attribute } from "../../attribute/base/Attribute";
import { Environment } from "../../environment/base/Environment";
import { AttributeClassService } from "../attributeClass.service";
@graphql.Resolver(() => AttributeClass)
export class AttributeClassResolverBase {
  constructor(protected readonly service: AttributeClassService) {}

  async _attributeClassesMeta(
    @graphql.Args() args: AttributeClassCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AttributeClass])
  async attributeClasses(
    @graphql.Args() args: AttributeClassFindManyArgs
  ): Promise<AttributeClass[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => AttributeClass, { nullable: true })
  async attributeClass(
    @graphql.Args() args: AttributeClassFindUniqueArgs
  ): Promise<AttributeClass | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AttributeClass)
  async createAttributeClass(
    @graphql.Args() args: CreateAttributeClassArgs
  ): Promise<AttributeClass> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        environment: {
          connect: args.data.environment,
        },
      },
    });
  }

  @graphql.Mutation(() => AttributeClass)
  async updateAttributeClass(
    @graphql.Args() args: UpdateAttributeClassArgs
  ): Promise<AttributeClass | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          environment: {
            connect: args.data.environment,
          },
        },
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

  @graphql.Mutation(() => AttributeClass)
  async deleteAttributeClass(
    @graphql.Args() args: DeleteAttributeClassArgs
  ): Promise<AttributeClass | null> {
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

  @graphql.ResolveField(() => [SurveyAttributeFilter], {
    name: "attributeFilters",
  })
  async resolveFieldAttributeFilters(
    @graphql.Parent() parent: AttributeClass,
    @graphql.Args() args: SurveyAttributeFilterFindManyArgs
  ): Promise<SurveyAttributeFilter[]> {
    const results = await this.service.findAttributeFilters(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Attribute], { name: "attributes" })
  async resolveFieldAttributes(
    @graphql.Parent() parent: AttributeClass,
    @graphql.Args() args: AttributeFindManyArgs
  ): Promise<Attribute[]> {
    const results = await this.service.findAttributes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Environment, {
    nullable: true,
    name: "environment",
  })
  async resolveFieldEnvironment(
    @graphql.Parent() parent: AttributeClass
  ): Promise<Environment | null> {
    const result = await this.service.getEnvironment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
