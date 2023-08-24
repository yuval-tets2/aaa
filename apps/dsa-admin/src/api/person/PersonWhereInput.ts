import { AttributeListRelationFilter } from "../attribute/AttributeListRelationFilter";
import { DisplayListRelationFilter } from "../display/DisplayListRelationFilter";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type PersonWhereInput = {
  attributes?: AttributeListRelationFilter;
  displays?: DisplayListRelationFilter;
  environment?: EnvironmentWhereUniqueInput;
  responses?: ResponseListRelationFilter;
  sessions?: SessionListRelationFilter;
};
