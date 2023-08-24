import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  identityProvider?: SortOrder;
  identityProviderAccountId?: SortOrder;
  name?: SortOrder;
  notificationSettings?: SortOrder;
  objective?: SortOrder;
  onboardingCompleted?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
