/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bypass } from "@prisma/client";

export class BypassServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BypassCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BypassCountArgs>
  ): Promise<number> {
    return this.prisma.bypass.count(args);
  }

  async findMany<T extends Prisma.BypassFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BypassFindManyArgs>
  ): Promise<Bypass[]> {
    return this.prisma.bypass.findMany(args);
  }
  async findOne<T extends Prisma.BypassFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BypassFindUniqueArgs>
  ): Promise<Bypass | null> {
    return this.prisma.bypass.findUnique(args);
  }
  async create<T extends Prisma.BypassCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BypassCreateArgs>
  ): Promise<Bypass> {
    return this.prisma.bypass.create<T>(args);
  }
  async update<T extends Prisma.BypassUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BypassUpdateArgs>
  ): Promise<Bypass> {
    return this.prisma.bypass.update<T>(args);
  }
  async delete<T extends Prisma.BypassDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BypassDeleteArgs>
  ): Promise<Bypass> {
    return this.prisma.bypass.delete(args);
  }
}
