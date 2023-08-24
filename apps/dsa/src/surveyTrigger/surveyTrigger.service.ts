import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SurveyTriggerServiceBase } from "./base/surveyTrigger.service.base";

@Injectable()
export class SurveyTriggerService extends SurveyTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
