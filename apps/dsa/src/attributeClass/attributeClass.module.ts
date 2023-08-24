import { Module } from "@nestjs/common";
import { AttributeClassModuleBase } from "./base/attributeClass.module.base";
import { AttributeClassService } from "./attributeClass.service";
import { AttributeClassController } from "./attributeClass.controller";
import { AttributeClassResolver } from "./attributeClass.resolver";

@Module({
  imports: [AttributeClassModuleBase],
  controllers: [AttributeClassController],
  providers: [AttributeClassService, AttributeClassResolver],
  exports: [AttributeClassService],
})
export class AttributeClassModule {}
