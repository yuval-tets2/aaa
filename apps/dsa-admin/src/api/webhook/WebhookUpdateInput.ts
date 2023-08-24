import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type WebhookUpdateInput = {
  environment?: EnvironmentWhereUniqueInput;
  name?: string | null;
  surveyIds?: string;
  triggers?: Array<"responseCreated" | "responseUpdated" | "responseFinished">;
  url?: string;
};
