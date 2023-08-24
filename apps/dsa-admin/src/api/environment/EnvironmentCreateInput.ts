import { ApiKeyCreateNestedManyWithoutEnvironmentsInput } from "./ApiKeyCreateNestedManyWithoutEnvironmentsInput";
import { AttributeClassCreateNestedManyWithoutEnvironmentsInput } from "./AttributeClassCreateNestedManyWithoutEnvironmentsInput";
import { EventClassCreateNestedManyWithoutEnvironmentsInput } from "./EventClassCreateNestedManyWithoutEnvironmentsInput";
import { PersonCreateNestedManyWithoutEnvironmentsInput } from "./PersonCreateNestedManyWithoutEnvironmentsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SurveyCreateNestedManyWithoutEnvironmentsInput } from "./SurveyCreateNestedManyWithoutEnvironmentsInput";
import { TagCreateNestedManyWithoutEnvironmentsInput } from "./TagCreateNestedManyWithoutEnvironmentsInput";
import { WebhookCreateNestedManyWithoutEnvironmentsInput } from "./WebhookCreateNestedManyWithoutEnvironmentsInput";

export type EnvironmentCreateInput = {
  apiKeys?: ApiKeyCreateNestedManyWithoutEnvironmentsInput;
  attributeClasses?: AttributeClassCreateNestedManyWithoutEnvironmentsInput;
  eventClasses?: EventClassCreateNestedManyWithoutEnvironmentsInput;
  people?: PersonCreateNestedManyWithoutEnvironmentsInput;
  product: ProductWhereUniqueInput;
  surveys?: SurveyCreateNestedManyWithoutEnvironmentsInput;
  tags?: TagCreateNestedManyWithoutEnvironmentsInput;
  type: "production" | "development";
  webhooks?: WebhookCreateNestedManyWithoutEnvironmentsInput;
  widgetSetupCompleted: boolean;
};
