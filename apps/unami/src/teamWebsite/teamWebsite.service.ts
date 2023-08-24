import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamWebsiteServiceBase } from "./base/teamWebsite.service.base";

@Injectable()
export class TeamWebsiteService extends TeamWebsiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
