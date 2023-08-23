import { Account } from "../account/Account";
import { Plan } from "../plan/Plan";
import { Profile } from "../profile/Profile";
import { Session } from "../session/Session";

export type User = {
  accounts?: Array<Account>;
  email: string | null;
  emailVerified: Date | null;
  id: string;
  onboardingComplete: boolean;
  plans?: Array<Plan>;
  profile?: Profile | null;
  seenHomeOnboardingModal: boolean;
  seenPlanOnboardingModal: boolean;
  sessions?: Array<Session>;
};
