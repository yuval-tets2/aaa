import { Module } from "@nestjs/common";
import { TemplateItemModuleBase } from "./base/templateItem.module.base";
import { TemplateItemService } from "./templateItem.service";
import { TemplateItemController } from "./templateItem.controller";
import { TemplateItemResolver } from "./templateItem.resolver";

@Module({
  imports: [TemplateItemModuleBase],
  controllers: [TemplateItemController],
  providers: [TemplateItemService, TemplateItemResolver],
  exports: [TemplateItemService],
})
export class TemplateItemModule {}
