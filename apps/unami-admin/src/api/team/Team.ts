import { TeamUser } from "../teamUser/TeamUser";
import { TeamWebsite } from "../teamWebsite/TeamWebsite";

export type Team = {
  accessCode: string | null;
  createdAt: Date | null;
  id: string;
  name: string;
  teamUser?: Array<TeamUser>;
  teamWebsite?: Array<TeamWebsite>;
  updatedAt: Date | null;
};
