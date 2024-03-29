import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttributeServiceBase } from "./base/attribute.service.base";

@Injectable()
export class AttributeService extends AttributeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
