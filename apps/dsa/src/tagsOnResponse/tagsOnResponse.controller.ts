import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagsOnResponseService } from "./tagsOnResponse.service";
import { TagsOnResponseControllerBase } from "./base/tagsOnResponse.controller.base";

@swagger.ApiTags("tagsOnResponses")
@common.Controller("tagsOnResponses")
export class TagsOnResponseController extends TagsOnResponseControllerBase {
  constructor(protected readonly service: TagsOnResponseService) {
    super(service);
  }
}
