import { User } from "../user/User";

export type Account = {
  accessToken: string | null;
  createdAt: Date;
  expiresAt: number | null;
  id: string;
  idToken: string | null;
  provider: string;
  providerAccountId: string;
  refreshToken: string | null;
  scope: string | null;
  sessionState: string | null;
  tokenType: string | null;
  typeField: string;
  updatedAt: Date;
  user?: User | null;
};
