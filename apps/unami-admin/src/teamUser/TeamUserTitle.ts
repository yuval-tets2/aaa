import { TeamUser as TTeamUser } from "../api/teamUser/TeamUser";

export const TEAMUSER_TITLE_FIELD = "role";

export const TeamUserTitle = (record: TTeamUser): string => {
  return record.role || String(record.id);
};
