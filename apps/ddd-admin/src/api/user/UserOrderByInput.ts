import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  email?: SortOrder;
  emailVerified?: SortOrder;
  id?: SortOrder;
  onboardingComplete?: SortOrder;
  profileId?: SortOrder;
  seenHomeOnboardingModal?: SortOrder;
  seenPlanOnboardingModal?: SortOrder;
};
