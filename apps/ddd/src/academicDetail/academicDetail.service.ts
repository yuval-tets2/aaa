import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicDetailServiceBase } from "./base/academicDetail.service.base";

@Injectable()
export class AcademicDetailService extends AcademicDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
