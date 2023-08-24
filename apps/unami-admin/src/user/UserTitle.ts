import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "role";

export const UserTitle = (record: TUser): string => {
  return record.role || String(record.id);
};
