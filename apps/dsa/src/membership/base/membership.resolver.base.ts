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
import { CreateMembershipArgs } from "./CreateMembershipArgs";
import { UpdateMembershipArgs } from "./UpdateMembershipArgs";
import { DeleteMembershipArgs } from "./DeleteMembershipArgs";
import { MembershipCountArgs } from "./MembershipCountArgs";
import { MembershipFindManyArgs } from "./MembershipFindManyArgs";
import { MembershipFindUniqueArgs } from "./MembershipFindUniqueArgs";
import { Membership } from "./Membership";
import { Team } from "../../team/base/Team";
import { User } from "../../user/base/User";
import { MembershipService } from "../membership.service";
@graphql.Resolver(() => Membership)
export class MembershipResolverBase {
  constructor(protected readonly service: MembershipService) {}

  async _membershipsMeta(
    @graphql.Args() args: MembershipCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Membership])
  async memberships(
    @graphql.Args() args: MembershipFindManyArgs
  ): Promise<Membership[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Membership, { nullable: true })
  async membership(
    @graphql.Args() args: MembershipFindUniqueArgs
  ): Promise<Membership | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Membership)
  async createMembership(
    @graphql.Args() args: CreateMembershipArgs
  ): Promise<Membership> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        team: {
          connect: args.data.team,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => Membership)
  async updateMembership(
    @graphql.Args() args: UpdateMembershipArgs
  ): Promise<Membership | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          team: {
            connect: args.data.team,
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

  @graphql.Mutation(() => Membership)
  async deleteMembership(
    @graphql.Args() args: DeleteMembershipArgs
  ): Promise<Membership | null> {
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

  @graphql.ResolveField(() => Team, {
    nullable: true,
    name: "team",
  })
  async resolveFieldTeam(
    @graphql.Parent() parent: Membership
  ): Promise<Team | null> {
    const result = await this.service.getTeam(parent.id);

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
    @graphql.Parent() parent: Membership
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
