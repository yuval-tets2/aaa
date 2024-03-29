/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DegreeRequirement, Plan } from "@prisma/client";

export class DegreeRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DegreeRequirementCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DegreeRequirementCountArgs>
  ): Promise<number> {
    return this.prisma.degreeRequirement.count(args);
  }

  async findMany<T extends Prisma.DegreeRequirementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DegreeRequirementFindManyArgs>
  ): Promise<DegreeRequirement[]> {
    return this.prisma.degreeRequirement.findMany(args);
  }
  async findOne<T extends Prisma.DegreeRequirementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DegreeRequirementFindUniqueArgs>
  ): Promise<DegreeRequirement | null> {
    return this.prisma.degreeRequirement.findUnique(args);
  }
  async create<T extends Prisma.DegreeRequirementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DegreeRequirementCreateArgs>
  ): Promise<DegreeRequirement> {
    return this.prisma.degreeRequirement.create<T>(args);
  }
  async update<T extends Prisma.DegreeRequirementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DegreeRequirementUpdateArgs>
  ): Promise<DegreeRequirement> {
    return this.prisma.degreeRequirement.update<T>(args);
  }
  async delete<T extends Prisma.DegreeRequirementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DegreeRequirementDeleteArgs>
  ): Promise<DegreeRequirement> {
    return this.prisma.degreeRequirement.delete(args);
  }

  async getPlan(parentId: string): Promise<Plan | null> {
    return this.prisma.degreeRequirement
      .findUnique({
        where: { id: parentId },
      })
      .plan();
  }
}
