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
import { SurveyAttributeFilterService } from "../surveyAttributeFilter.service";
import { SurveyAttributeFilterCreateInput } from "./SurveyAttributeFilterCreateInput";
import { SurveyAttributeFilterWhereInput } from "./SurveyAttributeFilterWhereInput";
import { SurveyAttributeFilterWhereUniqueInput } from "./SurveyAttributeFilterWhereUniqueInput";
import { SurveyAttributeFilterFindManyArgs } from "./SurveyAttributeFilterFindManyArgs";
import { SurveyAttributeFilterUpdateInput } from "./SurveyAttributeFilterUpdateInput";
import { SurveyAttributeFilter } from "./SurveyAttributeFilter";

export class SurveyAttributeFilterControllerBase {
  constructor(protected readonly service: SurveyAttributeFilterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SurveyAttributeFilter })
  async create(
    @common.Body() data: SurveyAttributeFilterCreateInput
  ): Promise<SurveyAttributeFilter> {
    return await this.service.create({
      data: {
        ...data,

        attributeClass: {
          connect: data.attributeClass,
        },

        survey: {
          connect: data.survey,
        },
      },
      select: {
        attributeClass: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,
        id: true,

        survey: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SurveyAttributeFilter] })
  @ApiNestedQuery(SurveyAttributeFilterFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<SurveyAttributeFilter[]> {
    const args = plainToClass(SurveyAttributeFilterFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        attributeClass: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,
        id: true,

        survey: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SurveyAttributeFilter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SurveyAttributeFilterWhereUniqueInput
  ): Promise<SurveyAttributeFilter | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        attributeClass: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,
        id: true,

        survey: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: SurveyAttributeFilter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SurveyAttributeFilterWhereUniqueInput,
    @common.Body() data: SurveyAttributeFilterUpdateInput
  ): Promise<SurveyAttributeFilter | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          attributeClass: {
            connect: data.attributeClass,
          },

          survey: {
            connect: data.survey,
          },
        },
        select: {
          attributeClass: {
            select: {
              id: true,
            },
          },

          condition: true,
          createdAt: true,
          id: true,

          survey: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: SurveyAttributeFilter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SurveyAttributeFilterWhereUniqueInput
  ): Promise<SurveyAttributeFilter | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          attributeClass: {
            select: {
              id: true,
            },
          },

          condition: true,
          createdAt: true,
          id: true,

          survey: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          value: true,
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
