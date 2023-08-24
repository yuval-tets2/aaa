import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type ApiKeyUpdateInput = {
  environment?: EnvironmentWhereUniqueInput;
  hashedKey?: string;
  label?: string | null;
  lastUsedAt?: Date | null;
};
