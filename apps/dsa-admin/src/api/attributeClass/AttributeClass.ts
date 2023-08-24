import { SurveyAttributeFilter } from "../surveyAttributeFilter/SurveyAttributeFilter";
import { Attribute } from "../attribute/Attribute";
import { Environment } from "../environment/Environment";

export type AttributeClass = {
  archived: boolean;
  attributeFilters?: Array<SurveyAttributeFilter>;
  attributes?: Array<Attribute>;
  createdAt: Date;
  description: string | null;
  environment?: Environment;
  id: string;
  name: string;
  type?: "code" | "noCode" | "automatic";
  updatedAt: Date;
};
