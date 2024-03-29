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
import { EventClassService } from "../eventClass.service";
import { EventClassCreateInput } from "./EventClassCreateInput";
import { EventClassWhereInput } from "./EventClassWhereInput";
import { EventClassWhereUniqueInput } from "./EventClassWhereUniqueInput";
import { EventClassFindManyArgs } from "./EventClassFindManyArgs";
import { EventClassUpdateInput } from "./EventClassUpdateInput";
import { EventClass } from "./EventClass";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { SurveyTriggerFindManyArgs } from "../../surveyTrigger/base/SurveyTriggerFindManyArgs";
import { SurveyTrigger } from "../../surveyTrigger/base/SurveyTrigger";
import { SurveyTriggerWhereUniqueInput } from "../../surveyTrigger/base/SurveyTriggerWhereUniqueInput";

export class EventClassControllerBase {
  constructor(protected readonly service: EventClassService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventClass })
  async create(
    @common.Body() data: EventClassCreateInput
  ): Promise<EventClass> {
    return await this.service.create({
      data: {
        ...data,

        environment: {
          connect: data.environment,
        },
      },
      select: {
        createdAt: true,
        description: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        noCodeConfig: true,
        type: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EventClass] })
  @ApiNestedQuery(EventClassFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<EventClass[]> {
    const args = plainToClass(EventClassFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        noCodeConfig: true,
        type: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: EventClassWhereUniqueInput
  ): Promise<EventClass | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        noCodeConfig: true,
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
  @swagger.ApiOkResponse({ type: EventClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: EventClassWhereUniqueInput,
    @common.Body() data: EventClassUpdateInput
  ): Promise<EventClass | null> {
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
          description: true,

          environment: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          noCodeConfig: true,
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
  @swagger.ApiOkResponse({ type: EventClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: EventClassWhereUniqueInput
  ): Promise<EventClass | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,

          environment: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          noCodeConfig: true,
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

  @common.Get("/:id/events")
  @ApiNestedQuery(EventFindManyArgs)
  async findManyEvents(
    @common.Req() request: Request,
    @common.Param() params: EventClassWhereUniqueInput
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
    @common.Param() params: EventClassWhereUniqueInput,
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
    @common.Param() params: EventClassWhereUniqueInput,
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
    @common.Param() params: EventClassWhereUniqueInput,
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

  @common.Get("/:id/surveys")
  @ApiNestedQuery(SurveyTriggerFindManyArgs)
  async findManySurveys(
    @common.Req() request: Request,
    @common.Param() params: EventClassWhereUniqueInput
  ): Promise<SurveyTrigger[]> {
    const query = plainToClass(SurveyTriggerFindManyArgs, request.query);
    const results = await this.service.findSurveys(params.id, {
      ...query,
      select: {
        createdAt: true,

        eventClass: {
          select: {
            id: true,
          },
        },

        id: true,

        survey: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/surveys")
  async connectSurveys(
    @common.Param() params: EventClassWhereUniqueInput,
    @common.Body() body: SurveyTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      surveys: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/surveys")
  async updateSurveys(
    @common.Param() params: EventClassWhereUniqueInput,
    @common.Body() body: SurveyTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      surveys: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/surveys")
  async disconnectSurveys(
    @common.Param() params: EventClassWhereUniqueInput,
    @common.Body() body: SurveyTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      surveys: {
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
