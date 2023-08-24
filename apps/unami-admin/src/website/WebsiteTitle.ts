import { Website as TWebsite } from "../api/website/Website";

export const WEBSITE_TITLE_FIELD = "name";

export const WebsiteTitle = (record: TWebsite): string => {
  return record.name || String(record.id);
};
