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
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { User } from "./User";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { InviteFindManyArgs } from "../../invite/base/InviteFindManyArgs";
import { Invite } from "../../invite/base/Invite";
import { MembershipFindManyArgs } from "../../membership/base/MembershipFindManyArgs";
import { Membership } from "../../membership/base/Membership";
import { ResponseNoteFindManyArgs } from "../../responseNote/base/ResponseNoteFindManyArgs";
import { ResponseNote } from "../../responseNote/base/ResponseNote";
import { UserService } from "../user.service";
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(protected readonly service: UserService) {}

  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => User, { nullable: true })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => User)
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
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

  @graphql.Mutation(() => User)
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
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

  @graphql.ResolveField(() => [Account], { name: "accounts" })
  async resolveFieldAccounts(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    const results = await this.service.findAccounts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Invite], { name: "invitesAccepted" })
  async resolveFieldInvitesAccepted(
    @graphql.Parent() parent: User,
    @graphql.Args() args: InviteFindManyArgs
  ): Promise<Invite[]> {
    const results = await this.service.findInvitesAccepted(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Invite], { name: "invitesCreated" })
  async resolveFieldInvitesCreated(
    @graphql.Parent() parent: User,
    @graphql.Args() args: InviteFindManyArgs
  ): Promise<Invite[]> {
    const results = await this.service.findInvitesCreated(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Membership], { name: "memberships" })
  async resolveFieldMemberships(
    @graphql.Parent() parent: User,
    @graphql.Args() args: MembershipFindManyArgs
  ): Promise<Membership[]> {
    const results = await this.service.findMemberships(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ResponseNote], { name: "responseNotes" })
  async resolveFieldResponseNotes(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ResponseNoteFindManyArgs
  ): Promise<ResponseNote[]> {
    const results = await this.service.findResponseNotes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
