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
import { CourseService } from "../course.service";
import { CourseCreateInput } from "./CourseCreateInput";
import { CourseWhereInput } from "./CourseWhereInput";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { Course } from "./Course";

export class CourseControllerBase {
  constructor(protected readonly service: CourseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  async create(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.create({
      data: {
        ...data,

        semester: {
          connect: data.semester,
        },
      },
      select: {
        code: true,
        color: true,
        id: true,
        locked: true,
        prereqOverriden: true,

        semester: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        code: true,
        color: true,
        id: true,
        locked: true,
        prereqOverriden: true,

        semester: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        code: true,
        color: true,
        id: true,
        locked: true,
        prereqOverriden: true,

        semester: {
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
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          semester: {
            connect: data.semester,
          },
        },
        select: {
          code: true,
          color: true,
          id: true,
          locked: true,
          prereqOverriden: true,

          semester: {
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
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          code: true,
          color: true,
          id: true,
          locked: true,
          prereqOverriden: true,

          semester: {
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
}