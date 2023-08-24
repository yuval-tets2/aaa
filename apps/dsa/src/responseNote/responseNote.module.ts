import { Module } from "@nestjs/common";
import { ResponseNoteModuleBase } from "./base/responseNote.module.base";
import { ResponseNoteService } from "./responseNote.service";
import { ResponseNoteController } from "./responseNote.controller";
import { ResponseNoteResolver } from "./responseNote.resolver";

@Module({
  imports: [ResponseNoteModuleBase],
  controllers: [ResponseNoteController],
  providers: [ResponseNoteService, ResponseNoteResolver],
  exports: [ResponseNoteService],
})
export class ResponseNoteModule {}
