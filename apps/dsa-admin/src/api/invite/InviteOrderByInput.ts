import { SortOrder } from "../../util/SortOrder";

export type InviteOrderByInput = {
  accepted?: SortOrder;
  acceptorId?: SortOrder;
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  email?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
};
