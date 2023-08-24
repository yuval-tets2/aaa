import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DisplayServiceBase } from "./base/display.service.base";

@Injectable()
export class DisplayService extends DisplayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
