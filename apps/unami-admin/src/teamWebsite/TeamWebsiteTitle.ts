import { TeamWebsite as TTeamWebsite } from "../api/teamWebsite/TeamWebsite";

export const TEAMWEBSITE_TITLE_FIELD = "id";

export const TeamWebsiteTitle = (record: TTeamWebsite): string => {
  return record.id || String(record.id);
};
