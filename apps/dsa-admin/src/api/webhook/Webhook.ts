import { Environment } from "../environment/Environment";

export type Webhook = {
  createdAt: Date;
  environment?: Environment;
  id: string;
  name: string | null;
  surveyIds: string;
  triggers?: Array<"responseCreated" | "responseUpdated" | "responseFinished">;
  updatedAt: Date;
  url: string;
};
