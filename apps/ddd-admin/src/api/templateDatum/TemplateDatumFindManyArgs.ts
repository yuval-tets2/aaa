import { TemplateDatumWhereInput } from "./TemplateDatumWhereInput";
import { TemplateDatumOrderByInput } from "./TemplateDatumOrderByInput";

export type TemplateDatumFindManyArgs = {
  where?: TemplateDatumWhereInput;
  orderBy?: Array<TemplateDatumOrderByInput>;
  skip?: number;
  take?: number;
};
