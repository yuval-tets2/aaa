import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accessToken?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  idToken?: SortOrder;
  provider?: SortOrder;
  providerAccountId?: SortOrder;
  refreshToken?: SortOrder;
  scope?: SortOrder;
  sessionState?: SortOrder;
  tokenType?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
