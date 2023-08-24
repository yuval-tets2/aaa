import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type ApiKeyCreateInput = {
  environment: EnvironmentWhereUniqueInput;
  hashedKey: string;
  label?: string | null;
  lastUsedAt?: Date | null;
};
