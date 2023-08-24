import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SurveyAttributeFilterServiceBase } from "./base/surveyAttributeFilter.service.base";

@Injectable()
export class SurveyAttributeFilterService extends SurveyAttributeFilterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
