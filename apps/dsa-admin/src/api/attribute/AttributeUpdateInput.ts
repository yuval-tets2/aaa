import { AttributeClassWhereUniqueInput } from "../attributeClass/AttributeClassWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type AttributeUpdateInput = {
  attributeClass?: AttributeClassWhereUniqueInput;
  person?: PersonWhereUniqueInput;
  value?: string;
};
