import { Environment } from "../environment/Environment";
import { Team } from "../team/Team";

export type Product = {
  brandColor: string;
  clickOutsideClose: boolean;
  createdAt: Date;
  darkOverlay: boolean;
  environments?: Array<Environment>;
  formbricksSignature: boolean;
  highlightBorderColor: string | null;
  id: string;
  name: string;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "center";
  recontactDays: number;
  team?: Team;
  updatedAt: Date;
};
