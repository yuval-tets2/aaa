import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemplateItemServiceBase } from "./base/templateItem.service.base";

@Injectable()
export class TemplateItemService extends TemplateItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
