import { Response } from "../response/Response";
import { User } from "../user/User";

export type ResponseNote = {
  createdAt: Date;
  id: string;
  response?: Response;
  text: string;
  updatedAt: Date;
  user?: User;
};
