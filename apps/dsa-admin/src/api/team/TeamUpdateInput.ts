import { InviteUpdateManyWithoutTeamsInput } from "./InviteUpdateManyWithoutTeamsInput";
import { MembershipUpdateManyWithoutTeamsInput } from "./MembershipUpdateManyWithoutTeamsInput";
import { ProductUpdateManyWithoutTeamsInput } from "./ProductUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  invites?: InviteUpdateManyWithoutTeamsInput;
  memberships?: MembershipUpdateManyWithoutTeamsInput;
  name?: string;
  plan?: "free" | "pro";
  products?: ProductUpdateManyWithoutTeamsInput;
  stripeCustomerId?: string | null;
};
