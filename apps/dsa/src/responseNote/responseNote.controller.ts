import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResponseNoteService } from "./responseNote.service";
import { ResponseNoteControllerBase } from "./base/responseNote.controller.base";

@swagger.ApiTags("responseNotes")
@common.Controller("responseNotes")
export class ResponseNoteController extends ResponseNoteControllerBase {
  constructor(protected readonly service: ResponseNoteService) {
    super(service);
  }
}
