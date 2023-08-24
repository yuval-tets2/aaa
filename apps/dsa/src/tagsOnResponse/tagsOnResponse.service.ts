import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagsOnResponseServiceBase } from "./base/tagsOnResponse.service.base";

@Injectable()
export class TagsOnResponseService extends TagsOnResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
