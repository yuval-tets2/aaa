import { Module } from "@nestjs/common";
import { EventClassModuleBase } from "./base/eventClass.module.base";
import { EventClassService } from "./eventClass.service";
import { EventClassController } from "./eventClass.controller";
import { EventClassResolver } from "./eventClass.resolver";

@Module({
  imports: [EventClassModuleBase],
  controllers: [EventClassController],
  providers: [EventClassService, EventClassResolver],
  exports: [EventClassService],
})
export class EventClassModule {}
