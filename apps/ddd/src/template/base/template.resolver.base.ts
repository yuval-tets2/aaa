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
import { CreateTemplateArgs } from "./CreateTemplateArgs";
import { UpdateTemplateArgs } from "./UpdateTemplateArgs";
import { DeleteTemplateArgs } from "./DeleteTemplateArgs";
import { TemplateCountArgs } from "./TemplateCountArgs";
import { TemplateFindManyArgs } from "./TemplateFindManyArgs";
import { TemplateFindUniqueArgs } from "./TemplateFindUniqueArgs";
import { Template } from "./Template";
import { TemplateDatumFindManyArgs } from "../../templateDatum/base/TemplateDatumFindManyArgs";
import { TemplateDatum } from "../../templateDatum/base/TemplateDatum";
import { TemplateService } from "../template.service";
@graphql.Resolver(() => Template)
export class TemplateResolverBase {
  constructor(protected readonly service: TemplateService) {}

  async _templatesMeta(
    @graphql.Args() args: TemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Template])
  async templates(
    @graphql.Args() args: TemplateFindManyArgs
  ): Promise<Template[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Template, { nullable: true })
  async template(
    @graphql.Args() args: TemplateFindUniqueArgs
  ): Promise<Template | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Template)
  async createTemplate(
    @graphql.Args() args: CreateTemplateArgs
  ): Promise<Template> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Template)
  async updateTemplate(
    @graphql.Args() args: UpdateTemplateArgs
  ): Promise<Template | null> {
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

  @graphql.Mutation(() => Template)
  async deleteTemplate(
    @graphql.Args() args: DeleteTemplateArgs
  ): Promise<Template | null> {
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

  @graphql.ResolveField(() => [TemplateDatum], { name: "templateData" })
  async resolveFieldTemplateData(
    @graphql.Parent() parent: Template,
    @graphql.Args() args: TemplateDatumFindManyArgs
  ): Promise<TemplateDatum[]> {
    const results = await this.service.findTemplateData(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
