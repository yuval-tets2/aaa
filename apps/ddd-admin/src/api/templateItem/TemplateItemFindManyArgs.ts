import { TemplateItemWhereInput } from "./TemplateItemWhereInput";
import { TemplateItemOrderByInput } from "./TemplateItemOrderByInput";

export type TemplateItemFindManyArgs = {
  where?: TemplateItemWhereInput;
  orderBy?: Array<TemplateItemOrderByInput>;
  skip?: number;
  take?: number;
};
