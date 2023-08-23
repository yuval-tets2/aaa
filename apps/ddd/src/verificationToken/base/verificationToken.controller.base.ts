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
import { VerificationTokenService } from "../verificationToken.service";
import { VerificationTokenCreateInput } from "./VerificationTokenCreateInput";
import { VerificationTokenWhereInput } from "./VerificationTokenWhereInput";
import { VerificationTokenWhereUniqueInput } from "./VerificationTokenWhereUniqueInput";
import { VerificationTokenFindManyArgs } from "./VerificationTokenFindManyArgs";
import { VerificationTokenUpdateInput } from "./VerificationTokenUpdateInput";
import { VerificationToken } from "./VerificationToken";

export class VerificationTokenControllerBase {
  constructor(protected readonly service: VerificationTokenService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VerificationToken })
  async create(
    @common.Body() data: VerificationTokenCreateInput
  ): Promise<VerificationToken> {
    return await this.service.create({
      data: data,
      select: {
        expires: true,
        id: true,
        identifier: true,
        token: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VerificationToken] })
  @ApiNestedQuery(VerificationTokenFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<VerificationToken[]> {
    const args = plainToClass(VerificationTokenFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        expires: true,
        id: true,
        identifier: true,
        token: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VerificationToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: VerificationTokenWhereUniqueInput
  ): Promise<VerificationToken | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        expires: true,
        id: true,
        identifier: true,
        token: true,
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
  @swagger.ApiOkResponse({ type: VerificationToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: VerificationTokenWhereUniqueInput,
    @common.Body() data: VerificationTokenUpdateInput
  ): Promise<VerificationToken | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          expires: true,
          id: true,
          identifier: true,
          token: true,
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
  @swagger.ApiOkResponse({ type: VerificationToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: VerificationTokenWhereUniqueInput
  ): Promise<VerificationToken | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          expires: true,
          id: true,
          identifier: true,
          token: true,
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
