import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PLAN_TITLE_FIELD } from "./PlanTitle";
import { DEGREEREQUIREMENT_TITLE_FIELD } from "../degreeRequirement/DegreeRequirementTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Semester" source="endSemester" />
        <TextField label="End Year" source="endYear" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Requirements"
          source="degreerequirement.id"
          reference="DegreeRequirement"
        >
          <TextField source={DEGREEREQUIREMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Semester" source="startSemester" />
        <TextField label="Start Year" source="startYear" />
        <TextField label="Transfer Credits" source="transferCredits" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Semester"
          target="planId"
          label="Semesters"
        >
          <Datagrid rowClick="show">
            <TextField label="Color" source="color" />
            <TextField label="Id" source="id" />
            <BooleanField label="Locked" source="locked" />
            <ReferenceField label="Plan" source="plan.id" reference="Plan">
              <TextField source={PLAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Semester" source="semester" />
            <TextField label="Year" source="year" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
