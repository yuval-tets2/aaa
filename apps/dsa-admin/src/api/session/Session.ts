import { Event } from "../event/Event";
import { Person } from "../person/Person";

export type Session = {
  createdAt: Date;
  events?: Array<Event>;
  expiresAt: Date;
  id: string;
  person?: Person;
  updatedAt: Date;
};
