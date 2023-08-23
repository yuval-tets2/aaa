import { DegreeRequirement as TDegreeRequirement } from "../api/degreeRequirement/DegreeRequirement";

export const DEGREEREQUIREMENT_TITLE_FIELD = "bypasses";

export const DegreeRequirementTitle = (record: TDegreeRequirement): string => {
  return record.bypasses || String(record.id);
};
