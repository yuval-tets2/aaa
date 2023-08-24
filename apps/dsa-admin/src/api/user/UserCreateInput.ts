import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { InviteCreateNestedManyWithoutUsersInput } from "./InviteCreateNestedManyWithoutUsersInput";
import { MembershipCreateNestedManyWithoutUsersInput } from "./MembershipCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ResponseNoteCreateNestedManyWithoutUsersInput } from "./ResponseNoteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  email: string;
  emailVerified?: Date | null;
  groupId?: string | null;
  identityProvider: "email" | "github" | "google";
  identityProviderAccountId?: string | null;
  invitesAccepted?: InviteCreateNestedManyWithoutUsersInput;
  invitesCreated?: InviteCreateNestedManyWithoutUsersInput;
  memberships?: MembershipCreateNestedManyWithoutUsersInput;
  name?: string | null;
  notificationSettings: InputJsonValue;
  objective?:
    | "increase_conversion"
    | "improve_user_retention"
    | "increase_user_adoption"
    | "sharpen_marketing_messaging"
    | "support_sales"
    | "other"
    | null;
  onboardingCompleted: boolean;
  responseNotes?: ResponseNoteCreateNestedManyWithoutUsersInput;
  role?:
    | "project_manager"
    | "engineer"
    | "founder"
    | "marketing_specialist"
    | "other"
    | null;
};
