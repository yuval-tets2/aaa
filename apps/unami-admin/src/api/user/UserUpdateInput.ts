import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { TeamUserUpdateManyWithoutUsersInput } from "./TeamUserUpdateManyWithoutUsersInput";
import { WebsiteUpdateManyWithoutUsersInput } from "./WebsiteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  deletedAt?: Date | null;
  report?: ReportUpdateManyWithoutUsersInput;
  role?: string;
  teamUser?: TeamUserUpdateManyWithoutUsersInput;
  website?: WebsiteUpdateManyWithoutUsersInput;
};
