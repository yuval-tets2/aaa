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
import { CreatePostArgs } from "./CreatePostArgs";
import { UpdatePostArgs } from "./UpdatePostArgs";
import { DeletePostArgs } from "./DeletePostArgs";
import { PostCountArgs } from "./PostCountArgs";
import { PostFindManyArgs } from "./PostFindManyArgs";
import { PostFindUniqueArgs } from "./PostFindUniqueArgs";
import { Post } from "./Post";
import { TagFindManyArgs } from "../../tag/base/TagFindManyArgs";
import { Tag } from "../../tag/base/Tag";
import { Author } from "../../author/base/Author";
import { PostService } from "../post.service";
@graphql.Resolver(() => Post)
export class PostResolverBase {
  constructor(protected readonly service: PostService) {}

  async _postsMeta(
    @graphql.Args() args: PostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Post])
  async posts(@graphql.Args() args: PostFindManyArgs): Promise<Post[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Post, { nullable: true })
  async post(@graphql.Args() args: PostFindUniqueArgs): Promise<Post | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Post)
  async createPost(@graphql.Args() args: CreatePostArgs): Promise<Post> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        author: {
          connect: args.data.author,
        },
      },
    });
  }

  @graphql.Mutation(() => Post)
  async updatePost(@graphql.Args() args: UpdatePostArgs): Promise<Post | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          author: {
            connect: args.data.author,
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

  @graphql.Mutation(() => Post)
  async deletePost(@graphql.Args() args: DeletePostArgs): Promise<Post | null> {
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

  @graphql.ResolveField(() => [Tag], { name: "tags" })
  async resolveFieldTags(
    @graphql.Parent() parent: Post,
    @graphql.Args() args: TagFindManyArgs
  ): Promise<Tag[]> {
    const results = await this.service.findTags(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Author, {
    nullable: true,
    name: "author",
  })
  async resolveFieldAuthor(
    @graphql.Parent() parent: Post
  ): Promise<Author | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}