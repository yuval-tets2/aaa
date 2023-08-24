import { Environment } from "../environment/Environment";

export type ApiKey = {
  createdAt: Date;
  environment?: Environment;
  hashedKey: string;
  id: string;
  label: string | null;
  lastUsedAt: Date | null;
};
