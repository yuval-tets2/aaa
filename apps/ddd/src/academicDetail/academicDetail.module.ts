import { Module } from "@nestjs/common";
import { AcademicDetailModuleBase } from "./base/academicDetail.module.base";
import { AcademicDetailService } from "./academicDetail.service";
import { AcademicDetailController } from "./academicDetail.controller";
import { AcademicDetailResolver } from "./academicDetail.resolver";

@Module({
  imports: [AcademicDetailModuleBase],
  controllers: [AcademicDetailController],
  providers: [AcademicDetailService, AcademicDetailResolver],
  exports: [AcademicDetailService],
})
export class AcademicDetailModule {}
