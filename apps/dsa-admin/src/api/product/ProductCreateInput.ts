import { EnvironmentCreateNestedManyWithoutProductsInput } from "./EnvironmentCreateNestedManyWithoutProductsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProductCreateInput = {
  brandColor: string;
  clickOutsideClose: boolean;
  darkOverlay: boolean;
  environments?: EnvironmentCreateNestedManyWithoutProductsInput;
  formbricksSignature: boolean;
  highlightBorderColor?: string | null;
  name: string;
  placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "center";
  recontactDays: number;
  team: TeamWhereUniqueInput;
};
