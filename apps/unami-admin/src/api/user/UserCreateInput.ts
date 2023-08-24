import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { TeamUserCreateNestedManyWithoutUsersInput } from "./TeamUserCreateNestedManyWithoutUsersInput";
import { WebsiteCreateNestedManyWithoutUsersInput } from "./WebsiteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  deletedAt?: Date | null;
  report?: ReportCreateNestedManyWithoutUsersInput;
  role: string;
  teamUser?: TeamUserCreateNestedManyWithoutUsersInput;
  website?: WebsiteCreateNestedManyWithoutUsersInput;
};
