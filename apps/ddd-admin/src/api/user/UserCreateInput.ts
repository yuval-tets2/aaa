import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { PlanCreateNestedManyWithoutUsersInput } from "./PlanCreateNestedManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: Date | null;
  onboardingComplete: boolean;
  plans?: PlanCreateNestedManyWithoutUsersInput;
  profile?: ProfileWhereUniqueInput | null;
  seenHomeOnboardingModal: boolean;
  seenPlanOnboardingModal: boolean;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
};
