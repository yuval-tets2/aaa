import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventClassServiceBase } from "./base/eventClass.service.base";

@Injectable()
export class EventClassService extends EventClassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
