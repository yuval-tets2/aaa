import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventDatumServiceBase } from "./base/eventDatum.service.base";

@Injectable()
export class EventDatumService extends EventDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
