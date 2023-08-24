import { Environment as TEnvironment } from "../api/environment/Environment";

export const ENVIRONMENT_TITLE_FIELD = "id";

export const EnvironmentTitle = (record: TEnvironment): string => {
  return record.id || String(record.id);
};
