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
import { BypassService } from "../bypass.service";
import { BypassCreateInput } from "./BypassCreateInput";
import { BypassWhereInput } from "./BypassWhereInput";
import { BypassWhereUniqueInput } from "./BypassWhereUniqueInput";
import { BypassFindManyArgs } from "./BypassFindManyArgs";
import { BypassUpdateInput } from "./BypassUpdateInput";
import { Bypass } from "./Bypass";

export class BypassControllerBase {
  constructor(protected readonly service: BypassService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bypass })
  async create(@common.Body() data: BypassCreateInput): Promise<Bypass> {
    return await this.service.create({
      data: data,
      select: {
        courseCode: true,
        hours: true,
        id: true,
        requirement: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bypass] })
  @ApiNestedQuery(BypassFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Bypass[]> {
    const args = plainToClass(BypassFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        courseCode: true,
        hours: true,
        id: true,
        requirement: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bypass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: BypassWhereUniqueInput
  ): Promise<Bypass | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        courseCode: true,
        hours: true,
        id: true,
        requirement: true,
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
  @swagger.ApiOkResponse({ type: Bypass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: BypassWhereUniqueInput,
    @common.Body() data: BypassUpdateInput
  ): Promise<Bypass | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          courseCode: true,
          hours: true,
          id: true,
          requirement: true,
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
  @swagger.ApiOkResponse({ type: Bypass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: BypassWhereUniqueInput
  ): Promise<Bypass | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          courseCode: true,
          hours: true,
          id: true,
          requirement: true,
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
