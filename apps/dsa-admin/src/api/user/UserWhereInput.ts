import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { InviteListRelationFilter } from "../invite/InviteListRelationFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";
import { ResponseNoteListRelationFilter } from "../responseNote/ResponseNoteListRelationFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  invitesAccepted?: InviteListRelationFilter;
  invitesCreated?: InviteListRelationFilter;
  memberships?: MembershipListRelationFilter;
  responseNotes?: ResponseNoteListRelationFilter;
};
