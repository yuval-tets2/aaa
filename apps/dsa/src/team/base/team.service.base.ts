/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Team, Invite, Membership, Product } from "@prisma/client";

export class TeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TeamCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamCountArgs>
  ): Promise<number> {
    return this.prisma.team.count(args);
  }

  async findMany<T extends Prisma.TeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamFindManyArgs>
  ): Promise<Team[]> {
    return this.prisma.team.findMany(args);
  }
  async findOne<T extends Prisma.TeamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamFindUniqueArgs>
  ): Promise<Team | null> {
    return this.prisma.team.findUnique(args);
  }
  async create<T extends Prisma.TeamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamCreateArgs>
  ): Promise<Team> {
    return this.prisma.team.create<T>(args);
  }
  async update<T extends Prisma.TeamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamUpdateArgs>
  ): Promise<Team> {
    return this.prisma.team.update<T>(args);
  }
  async delete<T extends Prisma.TeamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamDeleteArgs>
  ): Promise<Team> {
    return this.prisma.team.delete(args);
  }

  async findInvites(
    parentId: string,
    args: Prisma.InviteFindManyArgs
  ): Promise<Invite[]> {
    return this.prisma.team
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .invites(args);
  }

  async findMemberships(
    parentId: string,
    args: Prisma.MembershipFindManyArgs
  ): Promise<Membership[]> {
    return this.prisma.team
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .memberships(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.team
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }
}
