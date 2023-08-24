import { Invite as TInvite } from "../api/invite/Invite";

export const INVITE_TITLE_FIELD = "name";

export const InviteTitle = (record: TInvite): string => {
  return record.name || String(record.id);
};
