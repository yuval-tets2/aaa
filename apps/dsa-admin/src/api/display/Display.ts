import { Person } from "../person/Person";
import { Survey } from "../survey/Survey";

export type Display = {
  createdAt: Date;
  id: string;
  person?: Person | null;
  status?: "seen" | "responded";
  survey?: Survey;
  updatedAt: Date;
};
