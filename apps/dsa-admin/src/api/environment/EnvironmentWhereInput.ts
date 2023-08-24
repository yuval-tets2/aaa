import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";
import { AttributeClassListRelationFilter } from "../attributeClass/AttributeClassListRelationFilter";
import { EventClassListRelationFilter } from "../eventClass/EventClassListRelationFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SurveyListRelationFilter } from "../survey/SurveyListRelationFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";

export type EnvironmentWhereInput = {
  apiKeys?: ApiKeyListRelationFilter;
  attributeClasses?: AttributeClassListRelationFilter;
  eventClasses?: EventClassListRelationFilter;
  people?: PersonListRelationFilter;
  product?: ProductWhereUniqueInput;
  surveys?: SurveyListRelationFilter;
  tags?: TagListRelationFilter;
  webhooks?: WebhookListRelationFilter;
};
