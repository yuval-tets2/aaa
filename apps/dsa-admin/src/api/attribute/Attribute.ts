import { AttributeClass } from "../attributeClass/AttributeClass";
import { Person } from "../person/Person";

export type Attribute = {
  attributeClass?: AttributeClass;
  createdAt: Date;
  id: string;
  person?: Person;
  updatedAt: Date;
  value: string;
};
