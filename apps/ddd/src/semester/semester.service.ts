import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SemesterServiceBase } from "./base/semester.service.base";

@Injectable()
export class SemesterService extends SemesterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
