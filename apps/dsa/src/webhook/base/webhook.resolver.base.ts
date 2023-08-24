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
import { CreateWebhookArgs } from "./CreateWebhookArgs";
import { UpdateWebhookArgs } from "./UpdateWebhookArgs";
import { DeleteWebhookArgs } from "./DeleteWebhookArgs";
import { WebhookCountArgs } from "./WebhookCountArgs";
import { WebhookFindManyArgs } from "./WebhookFindManyArgs";
import { WebhookFindUniqueArgs } from "./WebhookFindUniqueArgs";
import { Webhook } from "./Webhook";
import { Environment } from "../../environment/base/Environment";
import { WebhookService } from "../webhook.service";
@graphql.Resolver(() => Webhook)
export class WebhookResolverBase {
  constructor(protected readonly service: WebhookService) {}

  async _webhooksMeta(
    @graphql.Args() args: WebhookCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Webhook])
  async webhooks(
    @graphql.Args() args: WebhookFindManyArgs
  ): Promise<Webhook[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Webhook, { nullable: true })
  async webhook(
    @graphql.Args() args: WebhookFindUniqueArgs
  ): Promise<Webhook | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Webhook)
  async createWebhook(
    @graphql.Args() args: CreateWebhookArgs
  ): Promise<Webhook> {
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

  @graphql.Mutation(() => Webhook)
  async updateWebhook(
    @graphql.Args() args: UpdateWebhookArgs
  ): Promise<Webhook | null> {
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

  @graphql.Mutation(() => Webhook)
  async deleteWebhook(
    @graphql.Args() args: DeleteWebhookArgs
  ): Promise<Webhook | null> {
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

  @graphql.ResolveField(() => Environment, {
    nullable: true,
    name: "environment",
  })
  async resolveFieldEnvironment(
    @graphql.Parent() parent: Webhook
  ): Promise<Environment | null> {
    const result = await this.service.getEnvironment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}