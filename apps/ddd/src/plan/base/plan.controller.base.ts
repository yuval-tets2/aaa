/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PlanService } from "../plan.service";
import { PlanCreateInput } from "./PlanCreateInput";
import { PlanWhereInput } from "./PlanWhereInput";
import { PlanWhereUniqueInput } from "./PlanWhereUniqueInput";
import { PlanFindManyArgs } from "./PlanFindManyArgs";
import { PlanUpdateInput } from "./PlanUpdateInput";
import { Plan } from "./Plan";
import { SemesterFindManyArgs } from "../../semester/base/SemesterFindManyArgs";
import { Semester } from "../../semester/base/Semester";
import { SemesterWhereUniqueInput } from "../../semester/base/SemesterWhereUniqueInput";

export class PlanControllerBase {
  constructor(protected readonly service: PlanService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Plan })
  async create(@common.Body() data: PlanCreateInput): Promise<Plan> {
    return await this.service.create({
      data: {
        ...data,

        requirements: data.requirements
          ? {
              connect: data.requirements,
            }
          : undefined,

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        endSemester: true,
        endYear: true,
        id: true,
        name: true,

        requirements: {
          select: {
            id: true,
          },
        },

        startSemester: true,
        startYear: true,
        transferCredits: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Plan] })
  @ApiNestedQuery(PlanFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Plan[]> {
    const args = plainToClass(PlanFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        endSemester: true,
        endYear: true,
        id: true,
        name: true,

        requirements: {
          select: {
            id: true,
          },
        },

        startSemester: true,
        startYear: true,
        transferCredits: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Plan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: PlanWhereUniqueInput
  ): Promise<Plan | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        endSemester: true,
        endYear: true,
        id: true,
        name: true,

        requirements: {
          select: {
            id: true,
          },
        },

        startSemester: true,
        startYear: true,
        transferCredits: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Plan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() data: PlanUpdateInput
  ): Promise<Plan | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          requirements: data.requirements
            ? {
                connect: data.requirements,
              }
            : undefined,

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          endSemester: true,
          endYear: true,
          id: true,
          name: true,

          requirements: {
            select: {
              id: true,
            },
          },

          startSemester: true,
          startYear: true,
          transferCredits: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Plan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: PlanWhereUniqueInput
  ): Promise<Plan | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          endSemester: true,
          endYear: true,
          id: true,
          name: true,

          requirements: {
            select: {
              id: true,
            },
          },

          startSemester: true,
          startYear: true,
          transferCredits: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/semesters")
  @ApiNestedQuery(SemesterFindManyArgs)
  async findManySemesters(
    @common.Req() request: Request,
    @common.Param() params: PlanWhereUniqueInput
  ): Promise<Semester[]> {
    const query = plainToClass(SemesterFindManyArgs, request.query);
    const results = await this.service.findSemesters(params.id, {
      ...query,
      select: {
        color: true,
        id: true,
        locked: true,

        plan: {
          select: {
            id: true,
          },
        },

        semester: true,
        year: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/semesters")
  async connectSemesters(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() body: SemesterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      semesters: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/semesters")
  async updateSemesters(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() body: SemesterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      semesters: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/semesters")
  async disconnectSemesters(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() body: SemesterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      semesters: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
