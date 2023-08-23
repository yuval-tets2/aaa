import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DegreeRequirementServiceBase } from "./base/degreeRequirement.service.base";

@Injectable()
export class DegreeRequirementService extends DegreeRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
