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
import { InviteService } from "../invite.service";
import { InviteCreateInput } from "./InviteCreateInput";
import { InviteWhereInput } from "./InviteWhereInput";
import { InviteWhereUniqueInput } from "./InviteWhereUniqueInput";
import { InviteFindManyArgs } from "./InviteFindManyArgs";
import { InviteUpdateInput } from "./InviteUpdateInput";
import { Invite } from "./Invite";

export class InviteControllerBase {
  constructor(protected readonly service: InviteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Invite })
  async create(@common.Body() data: InviteCreateInput): Promise<Invite> {
    return await this.service.create({
      data: {
        ...data,

        acceptor: data.acceptor
          ? {
              connect: data.acceptor,
            }
          : undefined,

        creator: {
          connect: data.creator,
        },

        team: {
          connect: data.team,
        },
      },
      select: {
        accepted: true,

        acceptor: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        email: true,
        expiresAt: true,
        id: true,
        name: true,
        role: true,

        team: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Invite] })
  @ApiNestedQuery(InviteFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Invite[]> {
    const args = plainToClass(InviteFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accepted: true,

        acceptor: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        email: true,
        expiresAt: true,
        id: true,
        name: true,
        role: true,

        team: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Invite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: InviteWhereUniqueInput
  ): Promise<Invite | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accepted: true,

        acceptor: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        email: true,
        expiresAt: true,
        id: true,
        name: true,
        role: true,

        team: {
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
  @swagger.ApiOkResponse({ type: Invite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: InviteWhereUniqueInput,
    @common.Body() data: InviteUpdateInput
  ): Promise<Invite | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          acceptor: data.acceptor
            ? {
                connect: data.acceptor,
              }
            : undefined,

          creator: {
            connect: data.creator,
          },

          team: {
            connect: data.team,
          },
        },
        select: {
          accepted: true,

          acceptor: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          creator: {
            select: {
              id: true,
            },
          },

          email: true,
          expiresAt: true,
          id: true,
          name: true,
          role: true,

          team: {
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
  @swagger.ApiOkResponse({ type: Invite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: InviteWhereUniqueInput
  ): Promise<Invite | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accepted: true,

          acceptor: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          creator: {
            select: {
              id: true,
            },
          },

          email: true,
          expiresAt: true,
          id: true,
          name: true,
          role: true,

          team: {
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
