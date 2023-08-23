import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "email";

export const UserTitle = (record: TUser): string => {
  return record.email || String(record.id);
};
