import { User } from "../user/User";
import { Website } from "../website/Website";

export type Report = {
  createdAt: Date | null;
  description: string;
  id: string;
  name: string;
  parameters: string;
  typeField: string;
  updatedAt: Date | null;
  user?: User;
  website?: Website;
};
