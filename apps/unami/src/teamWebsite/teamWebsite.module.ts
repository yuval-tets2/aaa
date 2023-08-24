import { Module } from "@nestjs/common";
import { TeamWebsiteModuleBase } from "./base/teamWebsite.module.base";
import { TeamWebsiteService } from "./teamWebsite.service";
import { TeamWebsiteController } from "./teamWebsite.controller";
import { TeamWebsiteResolver } from "./teamWebsite.resolver";

@Module({
  imports: [TeamWebsiteModuleBase],
  controllers: [TeamWebsiteController],
  providers: [TeamWebsiteService, TeamWebsiteResolver],
  exports: [TeamWebsiteService],
})
export class TeamWebsiteModule {}
