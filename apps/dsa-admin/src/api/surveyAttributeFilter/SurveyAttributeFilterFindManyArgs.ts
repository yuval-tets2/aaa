import { SurveyAttributeFilterWhereInput } from "./SurveyAttributeFilterWhereInput";
import { SurveyAttributeFilterOrderByInput } from "./SurveyAttributeFilterOrderByInput";

export type SurveyAttributeFilterFindManyArgs = {
  where?: SurveyAttributeFilterWhereInput;
  orderBy?: Array<SurveyAttributeFilterOrderByInput>;
  skip?: number;
  take?: number;
};
