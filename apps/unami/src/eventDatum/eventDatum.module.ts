import { Module } from "@nestjs/common";
import { EventDatumModuleBase } from "./base/eventDatum.module.base";
import { EventDatumService } from "./eventDatum.service";
import { EventDatumController } from "./eventDatum.controller";
import { EventDatumResolver } from "./eventDatum.resolver";

@Module({
  imports: [EventDatumModuleBase],
  controllers: [EventDatumController],
  providers: [EventDatumService, EventDatumResolver],
  exports: [EventDatumService],
})
export class EventDatumModule {}
