import { AttributeClassWhereUniqueInput } from "../attributeClass/AttributeClassWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type AttributeWhereInput = {
  attributeClass?: AttributeClassWhereUniqueInput;
  person?: PersonWhereUniqueInput;
};
