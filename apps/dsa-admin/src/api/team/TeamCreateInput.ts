import { InviteCreateNestedManyWithoutTeamsInput } from "./InviteCreateNestedManyWithoutTeamsInput";
import { MembershipCreateNestedManyWithoutTeamsInput } from "./MembershipCreateNestedManyWithoutTeamsInput";
import { ProductCreateNestedManyWithoutTeamsInput } from "./ProductCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  invites?: InviteCreateNestedManyWithoutTeamsInput;
  memberships?: MembershipCreateNestedManyWithoutTeamsInput;
  name: string;
  plan: "free" | "pro";
  products?: ProductCreateNestedManyWithoutTeamsInput;
  stripeCustomerId?: string | null;
};
