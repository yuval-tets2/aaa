import { Module } from "@nestjs/common";
import { WebsiteEventModuleBase } from "./base/websiteEvent.module.base";
import { WebsiteEventService } from "./websiteEvent.service";
import { WebsiteEventController } from "./websiteEvent.controller";
import { WebsiteEventResolver } from "./websiteEvent.resolver";

@Module({
  imports: [WebsiteEventModuleBase],
  controllers: [WebsiteEventController],
  providers: [WebsiteEventService, WebsiteEventResolver],
  exports: [WebsiteEventService],
})
export class WebsiteEventModule {}
