import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessionDatumServiceBase } from "./base/sessionDatum.service.base";

@Injectable()
export class SessionDatumService extends SessionDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
