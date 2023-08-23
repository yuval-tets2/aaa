/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, User, Account, Plan, Session, Profile } from "@prisma/client";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCountArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>(args);
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>(args);
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findAccounts(
    parentId: string,
    args: Prisma.AccountFindManyArgs
  ): Promise<Account[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accounts(args);
  }

  async findPlans(
    parentId: string,
    args: Prisma.PlanFindManyArgs
  ): Promise<Plan[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .plans(args);
  }

  async findSessions(
    parentId: string,
    args: Prisma.SessionFindManyArgs
  ): Promise<Session[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessions(args);
  }

  async getProfile(parentId: string): Promise<Profile | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .profile();
  }
}