import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamUserServiceBase } from "./base/teamUser.service.base";

@Injectable()
export class TeamUserService extends TeamUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
