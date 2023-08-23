import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { PlanUpdateManyWithoutUsersInput } from "./PlanUpdateManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: Date | null;
  onboardingComplete?: boolean;
  plans?: PlanUpdateManyWithoutUsersInput;
  profile?: ProfileWhereUniqueInput | null;
  seenHomeOnboardingModal?: boolean;
  seenPlanOnboardingModal?: boolean;
  sessions?: SessionUpdateManyWithoutUsersInput;
};
