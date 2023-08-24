import * as graphql from "@nestjs/graphql";
import { ResponseNoteResolverBase } from "./base/responseNote.resolver.base";
import { ResponseNote } from "./base/ResponseNote";
import { ResponseNoteService } from "./responseNote.service";

@graphql.Resolver(() => ResponseNote)
export class ResponseNoteResolver extends ResponseNoteResolverBase {
  constructor(protected readonly service: ResponseNoteService) {
    super(service);
  }
}
