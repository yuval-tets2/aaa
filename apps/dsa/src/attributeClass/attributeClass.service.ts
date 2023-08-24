import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttributeClassServiceBase } from "./base/attributeClass.service.base";

@Injectable()
export class AttributeClassService extends AttributeClassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
