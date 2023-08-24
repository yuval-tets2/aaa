import { Invite } from "../invite/Invite";
import { Membership } from "../membership/Membership";
import { Product } from "../product/Product";

export type Team = {
  createdAt: Date;
  id: string;
  invites?: Array<Invite>;
  memberships?: Array<Membership>;
  name: string;
  plan?: "free" | "pro";
  products?: Array<Product>;
  stripeCustomerId: string | null;
  updatedAt: Date;
};
