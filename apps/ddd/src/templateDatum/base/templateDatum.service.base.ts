/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TemplateDatum, TemplateItem, Template } from "@prisma/client";

export class TemplateDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TemplateDatumCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDatumCountArgs>
  ): Promise<number> {
    return this.prisma.templateDatum.count(args);
  }

  async findMany<T extends Prisma.TemplateDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDatumFindManyArgs>
  ): Promise<TemplateDatum[]> {
    return this.prisma.templateDatum.findMany(args);
  }
  async findOne<T extends Prisma.TemplateDatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDatumFindUniqueArgs>
  ): Promise<TemplateDatum | null> {
    return this.prisma.templateDatum.findUnique(args);
  }
  async create<T extends Prisma.TemplateDatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDatumCreateArgs>
  ): Promise<TemplateDatum> {
    return this.prisma.templateDatum.create<T>(args);
  }
  async update<T extends Prisma.TemplateDatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDatumUpdateArgs>
  ): Promise<TemplateDatum> {
    return this.prisma.templateDatum.update<T>(args);
  }
  async delete<T extends Prisma.TemplateDatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDatumDeleteArgs>
  ): Promise<TemplateDatum> {
    return this.prisma.templateDatum.delete(args);
  }

  async findItems(
    parentId: string,
    args: Prisma.TemplateItemFindManyArgs
  ): Promise<TemplateItem[]> {
    return this.prisma.templateDatum
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .items(args);
  }

  async getTemplate(parentId: string): Promise<Template | null> {
    return this.prisma.templateDatum
      .findUnique({
        where: { id: parentId },
      })
      .template();
  }
}