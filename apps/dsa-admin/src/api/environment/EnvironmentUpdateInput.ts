import { ApiKeyUpdateManyWithoutEnvironmentsInput } from "./ApiKeyUpdateManyWithoutEnvironmentsInput";
import { AttributeClassUpdateManyWithoutEnvironmentsInput } from "./AttributeClassUpdateManyWithoutEnvironmentsInput";
import { EventClassUpdateManyWithoutEnvironmentsInput } from "./EventClassUpdateManyWithoutEnvironmentsInput";
import { PersonUpdateManyWithoutEnvironmentsInput } from "./PersonUpdateManyWithoutEnvironmentsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SurveyUpdateManyWithoutEnvironmentsInput } from "./SurveyUpdateManyWithoutEnvironmentsInput";
import { TagUpdateManyWithoutEnvironmentsInput } from "./TagUpdateManyWithoutEnvironmentsInput";
import { WebhookUpdateManyWithoutEnvironmentsInput } from "./WebhookUpdateManyWithoutEnvironmentsInput";

export type EnvironmentUpdateInput = {
  apiKeys?: ApiKeyUpdateManyWithoutEnvironmentsInput;
  attributeClasses?: AttributeClassUpdateManyWithoutEnvironmentsInput;
  eventClasses?: EventClassUpdateManyWithoutEnvironmentsInput;
  people?: PersonUpdateManyWithoutEnvironmentsInput;
  product?: ProductWhereUniqueInput;
  surveys?: SurveyUpdateManyWithoutEnvironmentsInput;
  tags?: TagUpdateManyWithoutEnvironmentsInput;
  type?: "production" | "development";
  webhooks?: WebhookUpdateManyWithoutEnvironmentsInput;
  widgetSetupCompleted?: boolean;
};
