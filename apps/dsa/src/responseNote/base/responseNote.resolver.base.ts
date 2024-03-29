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
import { CreateResponseNoteArgs } from "./CreateResponseNoteArgs";
import { UpdateResponseNoteArgs } from "./UpdateResponseNoteArgs";
import { DeleteResponseNoteArgs } from "./DeleteResponseNoteArgs";
import { ResponseNoteCountArgs } from "./ResponseNoteCountArgs";
import { ResponseNoteFindManyArgs } from "./ResponseNoteFindManyArgs";
import { ResponseNoteFindUniqueArgs } from "./ResponseNoteFindUniqueArgs";
import { ResponseNote } from "./ResponseNote";
import { Response } from "../../response/base/Response";
import { User } from "../../user/base/User";
import { ResponseNoteService } from "../responseNote.service";
@graphql.Resolver(() => ResponseNote)
export class ResponseNoteResolverBase {
  constructor(protected readonly service: ResponseNoteService) {}

  async _responseNotesMeta(
    @graphql.Args() args: ResponseNoteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ResponseNote])
  async responseNotes(
    @graphql.Args() args: ResponseNoteFindManyArgs
  ): Promise<ResponseNote[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ResponseNote, { nullable: true })
  async responseNote(
    @graphql.Args() args: ResponseNoteFindUniqueArgs
  ): Promise<ResponseNote | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ResponseNote)
  async createResponseNote(
    @graphql.Args() args: CreateResponseNoteArgs
  ): Promise<ResponseNote> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        response: {
          connect: args.data.response,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => ResponseNote)
  async updateResponseNote(
    @graphql.Args() args: UpdateResponseNoteArgs
  ): Promise<ResponseNote | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          response: {
            connect: args.data.response,
          },

          user: {
            connect: args.data.user,
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

  @graphql.Mutation(() => ResponseNote)
  async deleteResponseNote(
    @graphql.Args() args: DeleteResponseNoteArgs
  ): Promise<ResponseNote | null> {
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

  @graphql.ResolveField(() => Response, {
    nullable: true,
    name: "response",
  })
  async resolveFieldResponse(
    @graphql.Parent() parent: ResponseNote
  ): Promise<Response | null> {
    const result = await this.service.getResponse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async resolveFieldUser(
    @graphql.Parent() parent: ResponseNote
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
