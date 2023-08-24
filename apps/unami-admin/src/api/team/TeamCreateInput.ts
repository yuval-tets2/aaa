import { TeamUserCreateNestedManyWithoutTeamsInput } from "./TeamUserCreateNestedManyWithoutTeamsInput";
import { TeamWebsiteCreateNestedManyWithoutTeamsInput } from "./TeamWebsiteCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  accessCode?: string | null;
  name: string;
  teamUser?: TeamUserCreateNestedManyWithoutTeamsInput;
  teamWebsite?: TeamWebsiteCreateNestedManyWithoutTeamsInput;
};
