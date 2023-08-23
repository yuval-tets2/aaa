import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BypassServiceBase } from "./base/bypass.service.base";

@Injectable()
export class BypassService extends BypassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
