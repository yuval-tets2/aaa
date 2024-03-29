import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteServiceBase } from "./base/invite.service.base";

@Injectable()
export class InviteService extends InviteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
