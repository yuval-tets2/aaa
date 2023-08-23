import { Module } from "@nestjs/common";
import { DegreeRequirementModuleBase } from "./base/degreeRequirement.module.base";
import { DegreeRequirementService } from "./degreeRequirement.service";
import { DegreeRequirementController } from "./degreeRequirement.controller";
import { DegreeRequirementResolver } from "./degreeRequirement.resolver";

@Module({
  imports: [DegreeRequirementModuleBase],
  controllers: [DegreeRequirementController],
  providers: [DegreeRequirementService, DegreeRequirementResolver],
  exports: [DegreeRequirementService],
})
export class DegreeRequirementModule {}
