import { EnvironmentUpdateManyWithoutProductsInput } from "./EnvironmentUpdateManyWithoutProductsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProductUpdateInput = {
  brandColor?: string;
  clickOutsideClose?: boolean;
  darkOverlay?: boolean;
  environments?: EnvironmentUpdateManyWithoutProductsInput;
  formbricksSignature?: boolean;
  highlightBorderColor?: string | null;
  name?: string;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "center";
  recontactDays?: number;
  team?: TeamWhereUniqueInput;
};
