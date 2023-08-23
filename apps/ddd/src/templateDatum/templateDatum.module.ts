import { Module } from "@nestjs/common";
import { TemplateDatumModuleBase } from "./base/templateDatum.module.base";
import { TemplateDatumService } from "./templateDatum.service";
import { TemplateDatumController } from "./templateDatum.controller";
import { TemplateDatumResolver } from "./templateDatum.resolver";

@Module({
  imports: [TemplateDatumModuleBase],
  controllers: [TemplateDatumController],
  providers: [TemplateDatumService, TemplateDatumResolver],
  exports: [TemplateDatumService],
})
export class TemplateDatumModule {}
