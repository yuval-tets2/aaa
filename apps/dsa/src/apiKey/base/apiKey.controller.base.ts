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
import { ApiKeyService } from "../apiKey.service";
import { ApiKeyCreateInput } from "./ApiKeyCreateInput";
import { ApiKeyWhereInput } from "./ApiKeyWhereInput";
import { ApiKeyWhereUniqueInput } from "./ApiKeyWhereUniqueInput";
import { ApiKeyFindManyArgs } from "./ApiKeyFindManyArgs";
import { ApiKeyUpdateInput } from "./ApiKeyUpdateInput";
import { ApiKey } from "./ApiKey";

export class ApiKeyControllerBase {
  constructor(protected readonly service: ApiKeyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApiKey })
  async create(@common.Body() data: ApiKeyCreateInput): Promise<ApiKey> {
    return await this.service.create({
      data: {
        ...data,

        environment: {
          connect: data.environment,
        },
      },
      select: {
        createdAt: true,

        environment: {
          select: {
            id: true,
          },
        },

        hashedKey: true,
        id: true,
        label: true,
        lastUsedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ApiKey] })
  @ApiNestedQuery(ApiKeyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ApiKey[]> {
    const args = plainToClass(ApiKeyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        environment: {
          select: {
            id: true,
          },
        },

        hashedKey: true,
        id: true,
        label: true,
        lastUsedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApiKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ApiKeyWhereUniqueInput
  ): Promise<ApiKey | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        environment: {
          select: {
            id: true,
          },
        },

        hashedKey: true,
        id: true,
        label: true,
        lastUsedAt: true,
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
  @swagger.ApiOkResponse({ type: ApiKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ApiKeyWhereUniqueInput,
    @common.Body() data: ApiKeyUpdateInput
  ): Promise<ApiKey | null> {
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
          createdAt: true,

          environment: {
            select: {
              id: true,
            },
          },

          hashedKey: true,
          id: true,
          label: true,
          lastUsedAt: true,
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
  @swagger.ApiOkResponse({ type: ApiKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ApiKeyWhereUniqueInput
  ): Promise<ApiKey | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          environment: {
            select: {
              id: true,
            },
          },

          hashedKey: true,
          id: true,
          label: true,
          lastUsedAt: true,
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