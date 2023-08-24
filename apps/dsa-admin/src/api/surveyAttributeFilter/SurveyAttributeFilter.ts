import { AttributeClass } from "../attributeClass/AttributeClass";
import { Survey } from "../survey/Survey";

export type SurveyAttributeFilter = {
  attributeClass?: AttributeClass;
  condition?: "equals" | "notEquals";
  createdAt: Date;
  id: string;
  survey?: Survey;
  updatedAt: Date;
  value: string;
};
