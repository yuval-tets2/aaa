import { Account } from "../account/Account";
import { Invite } from "../invite/Invite";
import { Membership } from "../membership/Membership";
import { JsonValue } from "type-fest";
import { ResponseNote } from "../responseNote/ResponseNote";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  email: string;
  emailVerified: Date | null;
  groupId: string | null;
  id: string;
  identityProvider?: "email" | "github" | "google";
  identityProviderAccountId: string | null;
  invitesAccepted?: Array<Invite>;
  invitesCreated?: Array<Invite>;
  memberships?: Array<Membership>;
  name: string | null;
  notificationSettings: JsonValue;
  objective?:
    | "increase_conversion"
    | "improve_user_retention"
    | "increase_user_adoption"
    | "sharpen_marketing_messaging"
    | "support_sales"
    | "other"
    | null;
  onboardingCompleted: boolean;
  responseNotes?: Array<ResponseNote>;
  role?:
    | "project_manager"
    | "engineer"
    | "founder"
    | "marketing_specialist"
    | "other"
    | null;
  updatedAt: Date;
};
