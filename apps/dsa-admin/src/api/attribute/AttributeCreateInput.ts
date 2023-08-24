import { AttributeClassWhereUniqueInput } from "../attributeClass/AttributeClassWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type AttributeCreateInput = {
  attributeClass: AttributeClassWhereUniqueInput;
  person: PersonWhereUniqueInput;
  value: string;
};
