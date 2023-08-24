import { Module } from "@nestjs/common";
import { TeamUserModuleBase } from "./base/teamUser.module.base";
import { TeamUserService } from "./teamUser.service";
import { TeamUserController } from "./teamUser.controller";
import { TeamUserResolver } from "./teamUser.resolver";

@Module({
  imports: [TeamUserModuleBase],
  controllers: [TeamUserController],
  providers: [TeamUserService, TeamUserResolver],
  exports: [TeamUserService],
})
export class TeamUserModule {}
