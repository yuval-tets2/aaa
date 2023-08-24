import { ApiKey } from "../apiKey/ApiKey";
import { AttributeClass } from "../attributeClass/AttributeClass";
import { EventClass } from "../eventClass/EventClass";
import { Person } from "../person/Person";
import { Product } from "../product/Product";
import { Survey } from "../survey/Survey";
import { Tag } from "../tag/Tag";
import { Webhook } from "../webhook/Webhook";

export type Environment = {
  apiKeys?: Array<ApiKey>;
  attributeClasses?: Array<AttributeClass>;
  createdAt: Date;
  eventClasses?: Array<EventClass>;
  id: string;
  people?: Array<Person>;
  product?: Product;
  surveys?: Array<Survey>;
  tags?: Array<Tag>;
  type?: "production" | "development";
  updatedAt: Date;
  webhooks?: Array<Webhook>;
  widgetSetupCompleted: boolean;
};
