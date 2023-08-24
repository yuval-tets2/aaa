import { Module } from "@nestjs/common";
import { TagsOnResponseModuleBase } from "./base/tagsOnResponse.module.base";
import { TagsOnResponseService } from "./tagsOnResponse.service";
import { TagsOnResponseController } from "./tagsOnResponse.controller";
import { TagsOnResponseResolver } from "./tagsOnResponse.resolver";

@Module({
  imports: [TagsOnResponseModuleBase],
  controllers: [TagsOnResponseController],
  providers: [TagsOnResponseService, TagsOnResponseResolver],
  exports: [TagsOnResponseService],
})
export class TagsOnResponseModule {}
