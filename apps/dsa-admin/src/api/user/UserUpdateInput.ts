import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { InviteUpdateManyWithoutUsersInput } from "./InviteUpdateManyWithoutUsersInput";
import { MembershipUpdateManyWithoutUsersInput } from "./MembershipUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ResponseNoteUpdateManyWithoutUsersInput } from "./ResponseNoteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  email?: string;
  emailVerified?: Date | null;
  groupId?: string | null;
  identityProvider?: "email" | "github" | "google";
  identityProviderAccountId?: string | null;
  invitesAccepted?: InviteUpdateManyWithoutUsersInput;
  invitesCreated?: InviteUpdateManyWithoutUsersInput;
  memberships?: MembershipUpdateManyWithoutUsersInput;
  name?: string | null;
  notificationSettings?: InputJsonValue;
  objective?:
    | "increase_conversion"
    | "improve_user_retention"
    | "increase_user_adoption"
    | "sharpen_marketing_messaging"
    | "support_sales"
    | "other"
    | null;
  onboardingCompleted?: boolean;
  responseNotes?: ResponseNoteUpdateManyWithoutUsersInput;
  role?:
    | "project_manager"
    | "engineer"
    | "founder"
    | "marketing_specialist"
    | "other"
    | null;
};
