import { Module } from "@nestjs/common";
import { DisplayModuleBase } from "./base/display.module.base";
import { DisplayService } from "./display.service";
import { DisplayController } from "./display.controller";
import { DisplayResolver } from "./display.resolver";

@Module({
  imports: [DisplayModuleBase],
  controllers: [DisplayController],
  providers: [DisplayService, DisplayResolver],
  exports: [DisplayService],
})
export class DisplayModule {}
