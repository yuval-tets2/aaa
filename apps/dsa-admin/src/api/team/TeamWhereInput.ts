import { InviteListRelationFilter } from "../invite/InviteListRelationFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type TeamWhereInput = {
  invites?: InviteListRelationFilter;
  memberships?: MembershipListRelationFilter;
  products?: ProductListRelationFilter;
};
