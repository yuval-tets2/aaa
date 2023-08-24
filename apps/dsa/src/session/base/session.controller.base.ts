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
import { SessionService } from "../session.service";
import { SessionCreateInput } from "./SessionCreateInput";
import { SessionWhereInput } from "./SessionWhereInput";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionFindManyArgs } from "./SessionFindManyArgs";
import { SessionUpdateInput } from "./SessionUpdateInput";
import { Session } from "./Session";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";

export class SessionControllerBase {
  constructor(protected readonly service: SessionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Session })
  async create(@common.Body() data: SessionCreateInput): Promise<Session> {
    return await this.service.create({
      data: {
        ...data,

        person: {
          connect: data.person,
        },
      },
      select: {
        createdAt: true,
        expiresAt: true,
        id: true,

        person: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Session] })
  @ApiNestedQuery(SessionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Session[]> {
    const args = plainToClass(SessionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        expiresAt: true,
        id: true,

        person: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        expiresAt: true,
        id: true,

        person: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() data: SessionUpdateInput
  ): Promise<Session | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          person: {
            connect: data.person,
          },
        },
        select: {
          createdAt: true,
          expiresAt: true,
          id: true,

          person: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          expiresAt: true,
          id: true,

          person: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/events")
  @ApiNestedQuery(EventFindManyArgs)
  async findManyEvents(
    @common.Req() request: Request,
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Event[]> {
    const query = plainToClass(EventFindManyArgs, request.query);
    const results = await this.service.findEvents(params.id, {
      ...query,
      select: {
        createdAt: true,

        eventClass: {
          select: {
            id: true,
          },
        },

        id: true,
        properties: true,

        session: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/events")
  async connectEvents(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/events")
  async updateEvents(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/events")
  async disconnectEvents(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
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
