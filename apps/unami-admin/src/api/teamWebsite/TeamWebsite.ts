import { Team } from "../team/Team";
import { Website } from "../website/Website";

export type TeamWebsite = {
  createdAt: Date | null;
  id: string;
  team?: Team;
  website?: Website;
};
