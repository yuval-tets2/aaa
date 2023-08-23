import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemplateDatumServiceBase } from "./base/templateDatum.service.base";

@Injectable()
export class TemplateDatumService extends TemplateDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
