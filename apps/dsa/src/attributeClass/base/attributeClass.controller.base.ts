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
import { AttributeClassService } from "../attributeClass.service";
import { AttributeClassCreateInput } from "./AttributeClassCreateInput";
import { AttributeClassWhereInput } from "./AttributeClassWhereInput";
import { AttributeClassWhereUniqueInput } from "./AttributeClassWhereUniqueInput";
import { AttributeClassFindManyArgs } from "./AttributeClassFindManyArgs";
import { AttributeClassUpdateInput } from "./AttributeClassUpdateInput";
import { AttributeClass } from "./AttributeClass";
import { SurveyAttributeFilterFindManyArgs } from "../../surveyAttributeFilter/base/SurveyAttributeFilterFindManyArgs";
import { SurveyAttributeFilter } from "../../surveyAttributeFilter/base/SurveyAttributeFilter";
import { SurveyAttributeFilterWhereUniqueInput } from "../../surveyAttributeFilter/base/SurveyAttributeFilterWhereUniqueInput";
import { AttributeFindManyArgs } from "../../attribute/base/AttributeFindManyArgs";
import { Attribute } from "../../attribute/base/Attribute";
import { AttributeWhereUniqueInput } from "../../attribute/base/AttributeWhereUniqueInput";

export class AttributeClassControllerBase {
  constructor(protected readonly service: AttributeClassService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AttributeClass })
  async create(
    @common.Body() data: AttributeClassCreateInput
  ): Promise<AttributeClass> {
    return await this.service.create({
      data: {
        ...data,

        environment: {
          connect: data.environment,
        },
      },
      select: {
        archived: true,
        createdAt: true,
        description: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        type: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AttributeClass] })
  @ApiNestedQuery(AttributeClassFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<AttributeClass[]> {
    const args = plainToClass(AttributeClassFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        archived: true,
        createdAt: true,
        description: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        type: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AttributeClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AttributeClassWhereUniqueInput
  ): Promise<AttributeClass | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        archived: true,
        createdAt: true,
        description: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        type: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: AttributeClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() data: AttributeClassUpdateInput
  ): Promise<AttributeClass | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          environment: {
            connect: data.environment,
          },
        },
        select: {
          archived: true,
          createdAt: true,
          description: true,

          environment: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          type: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: AttributeClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AttributeClassWhereUniqueInput
  ): Promise<AttributeClass | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          archived: true,
          createdAt: true,
          description: true,

          environment: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          type: true,
          updatedAt: true,
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

  @common.Get("/:id/attributeFilters")
  @ApiNestedQuery(SurveyAttributeFilterFindManyArgs)
  async findManyAttributeFilters(
    @common.Req() request: Request,
    @common.Param() params: AttributeClassWhereUniqueInput
  ): Promise<SurveyAttributeFilter[]> {
    const query = plainToClass(
      SurveyAttributeFilterFindManyArgs,
      request.query
    );
    const results = await this.service.findAttributeFilters(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attributeFilters")
  async connectAttributeFilters(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() body: SurveyAttributeFilterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attributeFilters: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attributeFilters")
  async updateAttributeFilters(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() body: SurveyAttributeFilterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attributeFilters: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attributeFilters")
  async disconnectAttributeFilters(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() body: SurveyAttributeFilterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attributeFilters: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/attributes")
  @ApiNestedQuery(AttributeFindManyArgs)
  async findManyAttributes(
    @common.Req() request: Request,
    @common.Param() params: AttributeClassWhereUniqueInput
  ): Promise<Attribute[]> {
    const query = plainToClass(AttributeFindManyArgs, request.query);
    const results = await this.service.findAttributes(params.id, {
      ...query,
      select: {
        attributeClass: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        person: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attributes")
  async connectAttributes(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() body: AttributeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attributes: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attributes")
  async updateAttributes(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() body: AttributeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attributes: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attributes")
  async disconnectAttributes(
    @common.Param() params: AttributeClassWhereUniqueInput,
    @common.Body() body: AttributeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attributes: {
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
