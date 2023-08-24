import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResponseNoteServiceBase } from "./base/responseNote.service.base";

@Injectable()
export class ResponseNoteService extends ResponseNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
