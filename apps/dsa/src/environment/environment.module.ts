import { Module } from "@nestjs/common";
import { EnvironmentModuleBase } from "./base/environment.module.base";
import { EnvironmentService } from "./environment.service";
import { EnvironmentController } from "./environment.controller";
import { EnvironmentResolver } from "./environment.resolver";

@Module({
  imports: [EnvironmentModuleBase],
  controllers: [EnvironmentController],
  providers: [EnvironmentService, EnvironmentResolver],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
