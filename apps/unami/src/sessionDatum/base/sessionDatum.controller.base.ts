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
import { SessionDatumService } from "../sessionDatum.service";
import { SessionDatumCreateInput } from "./SessionDatumCreateInput";
import { SessionDatumWhereInput } from "./SessionDatumWhereInput";
import { SessionDatumWhereUniqueInput } from "./SessionDatumWhereUniqueInput";
import { SessionDatumFindManyArgs } from "./SessionDatumFindManyArgs";
import { SessionDatumUpdateInput } from "./SessionDatumUpdateInput";
import { SessionDatum } from "./SessionDatum";

export class SessionDatumControllerBase {
  constructor(protected readonly service: SessionDatumService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SessionDatum })
  async create(
    @common.Body() data: SessionDatumCreateInput
  ): Promise<SessionDatum> {
    return await this.service.create({
      data: {
        ...data,

        session: {
          connect: data.session,
        },

        website: {
          connect: data.website,
        },
      },
      select: {
        createdAt: true,
        dataType: true,
        dateValue: true,
        eventKey: true,
        id: true,
        numberValue: true,

        session: {
          select: {
            id: true,
          },
        },

        stringValue: true,

        website: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SessionDatum] })
  @ApiNestedQuery(SessionDatumFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<SessionDatum[]> {
    const args = plainToClass(SessionDatumFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dataType: true,
        dateValue: true,
        eventKey: true,
        id: true,
        numberValue: true,

        session: {
          select: {
            id: true,
          },
        },

        stringValue: true,

        website: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SessionDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SessionDatumWhereUniqueInput
  ): Promise<SessionDatum | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dataType: true,
        dateValue: true,
        eventKey: true,
        id: true,
        numberValue: true,

        session: {
          select: {
            id: true,
          },
        },

        stringValue: true,

        website: {
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
  @swagger.ApiOkResponse({ type: SessionDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SessionDatumWhereUniqueInput,
    @common.Body() data: SessionDatumUpdateInput
  ): Promise<SessionDatum | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          session: {
            connect: data.session,
          },

          website: {
            connect: data.website,
          },
        },
        select: {
          createdAt: true,
          dataType: true,
          dateValue: true,
          eventKey: true,
          id: true,
          numberValue: true,

          session: {
            select: {
              id: true,
            },
          },

          stringValue: true,

          website: {
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
  @swagger.ApiOkResponse({ type: SessionDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SessionDatumWhereUniqueInput
  ): Promise<SessionDatum | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dataType: true,
          dateValue: true,
          eventKey: true,
          id: true,
          numberValue: true,

          session: {
            select: {
              id: true,
            },
          },

          stringValue: true,

          website: {
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
