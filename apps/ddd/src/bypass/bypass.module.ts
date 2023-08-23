import { Module } from "@nestjs/common";
import { BypassModuleBase } from "./base/bypass.module.base";
import { BypassService } from "./bypass.service";
import { BypassController } from "./bypass.controller";
import { BypassResolver } from "./bypass.resolver";

@Module({
  imports: [BypassModuleBase],
  controllers: [BypassController],
  providers: [BypassService, BypassResolver],
  exports: [BypassService],
})
export class BypassModule {}
