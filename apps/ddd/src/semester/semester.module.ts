import { Module } from "@nestjs/common";
import { SemesterModuleBase } from "./base/semester.module.base";
import { SemesterService } from "./semester.service";
import { SemesterController } from "./semester.controller";
import { SemesterResolver } from "./semester.resolver";

@Module({
  imports: [SemesterModuleBase],
  controllers: [SemesterController],
  providers: [SemesterService, SemesterResolver],
  exports: [SemesterService],
})
export class SemesterModule {}
