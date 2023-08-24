import { Attribute } from "../attribute/Attribute";
import { Display } from "../display/Display";
import { Environment } from "../environment/Environment";
import { Response } from "../response/Response";
import { Session } from "../session/Session";

export type Person = {
  attributes?: Array<Attribute>;
  createdAt: Date;
  displays?: Array<Display>;
  environment?: Environment;
  id: string;
  responses?: Array<Response>;
  sessions?: Array<Session>;
  updatedAt: Date;
};
