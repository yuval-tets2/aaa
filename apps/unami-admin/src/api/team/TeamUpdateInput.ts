import { TeamUserUpdateManyWithoutTeamsInput } from "./TeamUserUpdateManyWithoutTeamsInput";
import { TeamWebsiteUpdateManyWithoutTeamsInput } from "./TeamWebsiteUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  accessCode?: string | null;
  name?: string;
  teamUser?: TeamUserUpdateManyWithoutTeamsInput;
  teamWebsite?: TeamWebsiteUpdateManyWithoutTeamsInput;
};
