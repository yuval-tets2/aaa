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
import { PersonService } from "../person.service";
import { PersonCreateInput } from "./PersonCreateInput";
import { PersonWhereInput } from "./PersonWhereInput";
import { PersonWhereUniqueInput } from "./PersonWhereUniqueInput";
import { PersonFindManyArgs } from "./PersonFindManyArgs";
import { PersonUpdateInput } from "./PersonUpdateInput";
import { Person } from "./Person";
import { AttributeFindManyArgs } from "../../attribute/base/AttributeFindManyArgs";
import { Attribute } from "../../attribute/base/Attribute";
import { AttributeWhereUniqueInput } from "../../attribute/base/AttributeWhereUniqueInput";
import { DisplayFindManyArgs } from "../../display/base/DisplayFindManyArgs";
import { Display } from "../../display/base/Display";
import { DisplayWhereUniqueInput } from "../../display/base/DisplayWhereUniqueInput";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";

export class PersonControllerBase {
  constructor(protected readonly service: PersonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Person })
  async create(@common.Body() data: PersonCreateInput): Promise<Person> {
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

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Person] })
  @ApiNestedQuery(PersonFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Person[]> {
    const args = plainToClass(PersonFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        environment: {
          select: {
            id: true,
          },
        },

        id: true,
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
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() data: PersonUpdateInput
  ): Promise<Person | null> {
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

          id: true,
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
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
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

          id: true,
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

  @common.Get("/:id/attributes")
  @ApiNestedQuery(AttributeFindManyArgs)
  async findManyAttributes(
    @common.Req() request: Request,
    @common.Param() params: PersonWhereUniqueInput
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
    @common.Param() params: PersonWhereUniqueInput,
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
    @common.Param() params: PersonWhereUniqueInput,
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
    @common.Param() params: PersonWhereUniqueInput,
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

  @common.Get("/:id/displays")
  @ApiNestedQuery(DisplayFindManyArgs)
  async findManyDisplays(
    @common.Req() request: Request,
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Display[]> {
    const query = plainToClass(DisplayFindManyArgs, request.query);
    const results = await this.service.findDisplays(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        person: {
          select: {
            id: true,
          },
        },

        status: true,

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

  @common.Post("/:id/displays")
  async connectDisplays(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: DisplayWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      displays: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/displays")
  async updateDisplays(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: DisplayWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      displays: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/displays")
  async disconnectDisplays(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: DisplayWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      displays: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/responses")
  @ApiNestedQuery(ResponseFindManyArgs)
  async findManyResponses(
    @common.Req() request: Request,
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Response[]> {
    const query = plainToClass(ResponseFindManyArgs, request.query);
    const results = await this.service.findResponses(params.id, {
      ...query,
      select: {
        createdAt: true,
        data: true,
        finished: true,
        id: true,
        meta: true,

        person: {
          select: {
            id: true,
          },
        },

        personAttributes: true,

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

  @common.Post("/:id/responses")
  async connectResponses(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/responses")
  async updateResponses(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/responses")
  async disconnectResponses(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  async findManySessions(
    @common.Req() request: Request,
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessions")
  async connectSessions(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessions")
  async updateSessions(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessions")
  async disconnectSessions(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
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