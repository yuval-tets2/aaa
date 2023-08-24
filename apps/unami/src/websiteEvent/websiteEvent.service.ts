import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebsiteEventServiceBase } from "./base/websiteEvent.service.base";

@Injectable()
export class WebsiteEventService extends WebsiteEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
