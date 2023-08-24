import { Module } from "@nestjs/common";
import { SessionDatumModuleBase } from "./base/sessionDatum.module.base";
import { SessionDatumService } from "./sessionDatum.service";
import { SessionDatumController } from "./sessionDatum.controller";
import { SessionDatumResolver } from "./sessionDatum.resolver";

@Module({
  imports: [SessionDatumModuleBase],
  controllers: [SessionDatumController],
  providers: [SessionDatumService, SessionDatumResolver],
  exports: [SessionDatumService],
})
export class SessionDatumModule {}
